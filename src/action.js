/**
 * @namespace action
 */

import {
  ACTION_REMOVE_TYPE_NAME,
  ACTION_EMPTY_TYPE_NAME,
  ACTION_ID_KEY,
  ACTION_IDS_KEY,
  ACTION_TYPE_PREFIX,
  IS_TEST_ENVIRONMENT,
  STATUSES
} from './config'
import { getDefaultResponseMapper, parseError, uniqPrefix } from './helper'

/**
 * Created uniq prefix for action type
 *
 * @memberOf action
 * @private
 * @param {String} name - actionSchema key
 * @returns {String} - `${name} ${uniqPrefix}` name with uniq prefix
 * @private
 */
const makeActionUniqId = name => {
  return `${ACTION_TYPE_PREFIX} ${name} ${uniqPrefix}`
}

const getHandlerErrorText = (isFetching, error, payloadSource) => {
  if (!isFetching && error) {
    return error
  }
  if (!isFetching && payloadSource === undefined) {
    return 'Empty Data'
  }
  return error || ''
}

const getHandlerActionDataKey = (isFetching, hasError, payloadSource) => {
  if (!isFetching && !hasError) {
    return Array.isArray(payloadSource) ? ACTION_IDS_KEY : ACTION_ID_KEY
  }
  return undefined
}

const getHandlerPayload = (
  Action,
  isFetching,
  hasError,
  isArrayData,
  payloadSource
) => {
  if (payloadSource && !isFetching && !hasError) {
    return isArrayData
      ? payloadSource.map(item => Action.getEntityId(item))
      : Action.getEntityId(payloadSource)
  }
  return undefined
}
/**
 * Make action handler wrapper
 *
 * @memberOf action
 * @param {Function} Action - Action func
 * @param {String} actionId - uniq action id and type
 * @param {String} parentActionId - uniq parent action id and type (when action created with clone/withname/prefix)
 * @param {String} status - name of action status pending/success/error
 * @param {Object} actionSchema - normalizr actionSchema
 * @returns {Function} - action handler wrapper
 * @private
 */
const makeActionHandler = (
  Action,
  actionId,
  parentActionId,
  status,
  actionSchema
) => {
  /**
   * Action handler
   *
   * @param {String} error - action error text
   * @param {Object|Array} payloadSource - response from action result
   * @param {Object|Array} args - arguments from queryBuilder
   * @returns {Object} - action dispatch body
   */
  return function(error, payloadSource, sourceResult, args) {
    if (status === 'success' && payloadSource === undefined) {
      error = 'Empty payload'
      status = 'error'
    }

    // flag data in progress (all actions is async)
    const isFetching = status === 'pending'

    // error message text
    const errorText = getHandlerErrorText(isFetching, error, payloadSource)

    // flag
    const hasError = Boolean(errorText)

    // id key, ids or id dispatch({...action.data.id}) or dispatch({...action.data.ids})
    const actionDataKey = getHandlerActionDataKey(
      isFetching,
      hasError,
      payloadSource
    )

    // action flag response data is array or not
    const isArrayData = actionDataKey === ACTION_IDS_KEY

    // action property entity (actionSchema id attribute) name
    const entityName = actionSchema.key

    // list of ids or id from payload
    const payload = getHandlerPayload(
      Action,
      isFetching,
      hasError,
      isArrayData,
      payloadSource
    )

    /**
     * @type {{
     * type: String,
     * prefix: ACTION_TYPE_PREFIX,
     * actionId: String,
     * parentActionId: String,
     * status: String,
     * time: Number,
     * isArrayData: Boolean,
     * actionDataKey: ACTION_ID_KEY|ACTION_IDS_KEY,
     * entityName: String,
     * isFetching: Boolean,
     * errorText: String,
     * hasError: Boolean,
     * actionSchema: Object,
     * payload: Number|Array,
     * payloadSource: Object|Array
     * }}
     */
    return Object.freeze({
      time: new Date().getTime(),
      type: `${actionId}`,
      prefix: ACTION_TYPE_PREFIX,
      args,
      actionId,
      parentActionId,
      status,
      isArrayData,
      actionDataKey,
      entityName,
      isFetching,
      errorText,
      hasError,
      actionSchema,
      sourceResult,
      payload,
      payloadSource
    })
  }
}

const makeResultCallback = (responseMapper, success, error) => {
  return function(dispatch, getState, err, result, args) {
    try {
      const errorMessage = parseError(err)

      if (errorMessage) {
        return dispatch(error(errorMessage, undefined, undefined, args))
      }

      dispatch(success(undefined, responseMapper(result), result, args))
    } catch (e) {
      dispatch(error(String(`${e.message || e}`), undefined, undefined, args))
      throw e
    }
  }
}

const makeQueryBuilder = (level, dispatch, getState, args, method) => {
  const nextLevel = level + 1
  const nullLevelArgs = level === 0 ? args : [dispatch, getState]

  if (method instanceof Promise) {
    return method
      .apply(this, nullLevelArgs)
      .then(resp => {
        makeQueryBuilder(nextLevel, dispatch, getState, args, resp)
      })
      .catch(err => {
        throw err
      })
  }

  if (typeof method === 'function') {
    const result = method.apply(this, nullLevelArgs)
    return makeQueryBuilder(nextLevel, dispatch, getState, args, result)
  }

  return method
}

const makeCallActionMethod = resultCallBack => {
  return (actionMethod, args, dispatch, getState) => {
    args = Array.isArray(args) ? args : [args]

    let actionResult = actionMethod.apply(this, args)

    if (actionResult instanceof Promise) {
      return actionResult
        .then(resp => resultCallBack(dispatch, getState, false, resp, args))
        .catch(err => resultCallBack(dispatch, getState, err, undefined, args))
    }

    if (typeof actionResult === 'function') {
      actionResult = actionResult.call(this, dispatch, getState)

      if (!actionResult) {
        return resultCallBack(dispatch, getState, undefined, undefined, args)
      }

      if (actionResult instanceof Promise) {
        return actionResult
          .then(resp => resultCallBack(dispatch, getState, false, resp, args))
          .catch(err =>
            resultCallBack(dispatch, getState, err, undefined, args)
          )
      }
    }

    return resultCallBack(dispatch, getState, false, actionResult, args)
  }
}

const actionCopyWrapper = (
  Action,
  actionSchema,
  actionMethod,
  queryBuilder,
  responseMapper
) => {
  return newActionId => {
    newActionId = newActionId.toString().trim()

    if (!newActionId) {
      throw new Error('Action id must be not empty')
    }

    const parentActionId = Action.actionId()
    const nextActionId = [parentActionId, `${newActionId}`].join(' ')

    return makeAction.apply({}, [
      nextActionId,
      parentActionId,
      actionSchema,
      actionMethod,
      queryBuilder,
      responseMapper
    ])
  }
}

/**
 * Create new action
 *
 * @memberOf action
 * @param {String} actionId - uniquie action id
 * @param {String} [parentActionId=""] - parent action id
 * @param {Object} actionSchema - normalizr actionSchema
 * @param {Function|Promise} actionMethod - action function func/promise/ajax call/ etc
 * @param {String|Function|Promise} queryBuilder - action query function builder
 * returns String (for example url),
 * or array [url:String, queryParams:Object (url params), queryBody:Object (post body params)]
 * @param {Function} [responseMapper=_defaultResponseMapper] - actionMethod response (only success) mapper
 * @returns {Action} - Action wrapper Function
 * @private
 */
const makeAction = function(
  actionId,
  parentActionId,
  actionSchema,
  actionMethod,
  queryBuilder,
  responseMapper
) {
  /**
   * Private create action function
   *
   * @memberOf action.makeAction
   *
   * @returns {Function}
   * @constructor
   */
  this.actionId = actionId
  this.parentActionId = parentActionId
  this.schema = actionSchema
  this.method = actionMethod
  this.queryBuilder = queryBuilder
  this.responseMapper = responseMapper

  this.action = (...args) => {
    this.responseMapper = responseMapper || getDefaultResponseMapper()

    const [pending, success, error] = STATUSES.map(statusName =>
      makeActionHandler(
        this.action,
        actionId,
        parentActionId,
        statusName,
        actionSchema
      )
    )

    const resultCallBack = makeResultCallback(
      this.responseMapper,
      success,
      error
    )
    const callActionMethod = makeCallActionMethod(resultCallBack)

    // action body
    return (dispatch, getState) => {
      dispatch(pending())

      try {
        const compiledActionArgs = queryBuilder
          ? makeQueryBuilder(0, dispatch, getState, args, queryBuilder)
          : args

        if (compiledActionArgs instanceof Promise) {
          return compiledActionArgs
            .then(resp =>
              callActionMethod(actionMethod, resp, dispatch, getState)
            )
            .catch(err => {
              throw err
            })
        }

        callActionMethod(actionMethod, compiledActionArgs, dispatch, getState)
      } catch (e) {
        resultCallBack(dispatch, getState, e, undefined)
      }
    }
  }

  /**
   * @memberOf action.makeAction.Action
   * @type {Function}
   * @returns {Function} - returns action id
   */
  this.action.type = this.action.actionId = this.action.toString = this.action.valueOf = () => {
    return this.actionId
  }

  /**
   * @memberOf action.makeAction.Action
   * @param {Object} item - source entity data
   *
   * @type {Function}
   * @returns {Function} - returns id from source
   */
  this.action.getEntityId = item => {
    return this.schema.getId(item)
  }

  /**
   * @memberOf action.makeAction.Action
   * @type {Function}
   * @returns {Object} - returns actionSchema of action
   */
  this.action.getSchema = () => {
    return this.schema
  }

  /**
   * @memberOf action.makeAction.Action
   * @type {Function}
   * @returns {Function} - returns entity uniq name (id)
   */
  this.action.getEntityName = () => {
    return this.schema.key
  }

  /**
   * @memberOf action.makeAction.Action
   * @type {Function}
   * @returns {Action} - returns some action with new uniq id
   */
  this.action.clone = () => {
    return createAction(
      this.schema,
      this.method,
      this.queryBuilder,
      this.responseMapper
    )
  }

  /**
   * @memberOf action.makeAction.Action
   * @type {Function}
   * @returns {Action} - returns some action with prefix-id
   */
  this.action.withPrefix = (...prefix) => {
    return actionCopyWrapper(
      this.action,
      this.schema,
      this.method,
      this.queryBuilder,
      this.responseMapper
    )(prefix.join('-'))
  }

  /**
   * @memberOf action.makeAction.Action
   * @type {Function}
   * @returns {Action} - returns some action with name-id (see prefix)
   */
  this.action.withName = name => {
    return actionCopyWrapper(
      this.action,
      this.schema,
      this.method,
      this.queryBuilder,
      this.responseMapper
    )(name)
  }

  /**
   * Clear action store data
   *
   * @memberOf action.makeAction.Action
   * @type {Function}
   *
   * @example
   * store.dispatch(userLoginAction.empty())
   *
   * @returns {Undefined} - returns None, only clear action data
   */
  this.action.reset = () => {
    return (dispatch, getState) => {
      dispatch({
        time: new Date().getTime(),
        type: ACTION_EMPTY_TYPE_NAME,
        prefix: ACTION_TYPE_PREFIX,
        actionId: this.actionId,
        actionSchema: this.schema
      })
    }
  }

  /**
   * Remove action entity id or ids from entities reducer
   *
   * @memberOf action.makeAction.Action
   * @type {Function}
   *
   * @example
   * store.dispatch(userLoginAction.remove())
   *
   * @returns {Undefined} - returns None, only remove entity items
   */
  this.action.remove = () => {
    return (dispatch, getState) => {
      dispatch({
        time: new Date().getTime(),
        type: ACTION_REMOVE_TYPE_NAME,
        prefix: ACTION_TYPE_PREFIX,
        actionId: this.actionId,
        actionSchema: this.schema
      })
    }
  }

  return this.action
}

/**
 * Action creator
 *
 * @memberOf action
 * @function
 *
 * @param {String|Object} actionSchema - normalizr actionSchema item
 * @param {Function|Promise} actionMethod
 * @param {String|Function} [queryBuilder=undefined]
 * @param {Function} [responseMapper=_defaultResponseMapper||callback from setDefaultResponseMapper]
 *
 *
 * @example
 * // CREATE ACTION
 * const get = (url) => {// returns Promise ajax call}
 *
 * const getUserAction = createAction(user, get, 'user')
 * // calling url 'user'
 *
 * const getUserAction = createAction(user, () => {
 *  return new Promise((resolve, reject) => {
 *    // cookie|local storage|other get data
 *    resolve({
 *      //data
 *    })
 *  })
 * })
 *
 * const getUserAction = createAction(user, get, (userId) => `user/${userId}`)
 * // calling url 'user/${userId}'
 *
 * const getUserAction = createAction(user, get, (userId) => [
 *  `user/${userId}`,
 *  undefined,
 *  {name, phone, email}
 * ])
 * // calling url 'user/${userId}' and post data (if you are using axios) {name, phone, email}
 *
 * // you can pass multi level functions or promises (args) => (dispatch, getState) => (dispatch, getState) => (dispatch, getState) => ...
 * const getUserAction = createAction(user, get, (userId) => {
 *  return (dispatch, getState)=>{
 *    return new Promise((resolve) => {resolve(`user/${userId}`)})
 *  }
 * })
 * // calling url 'user/${userId}'
 *
 * const getUserAction = createAction(user, get, 'user', (resp) => {resp.data})
 * // calling url 'user' but replace backend success response to resp.data
 *
 * @returns {Action} - Action handler function
 */
export const createAction = (
  actionSchema,
  actionMethod,
  queryBuilder,
  responseMapper
) => {
  if (!actionSchema) {
    throw 'actionSchema argument is required, must be normalizr actionSchema'
  }
  if (!actionMethod) {
    throw 'actionMethod argument is required, must be promise or function'
  }
  if (responseMapper && typeof responseMapper !== 'function') {
    throw 'responseMapper must be function'
  }

  const actionId = makeActionUniqId(actionSchema.key)

  return makeAction.apply({}, [
    actionId,
    '',
    actionSchema,
    actionMethod,
    queryBuilder,
    responseMapper
  ])
}

if (IS_TEST_ENVIRONMENT) {
  module.exports.makeActionUniqId = makeActionUniqId
  module.exports.makeActionHandler = makeActionHandler
  module.exports.makeAction = makeAction
}
