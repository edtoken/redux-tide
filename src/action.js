/**
 * @namespace action
 */

import {
  ACTION_EMPTY_TYPE_NAME,
  ACTION_ID_KEY,
  ACTION_IDS_KEY,
  ACTION_TYPE_PREFIX,
  IS_TEST_ENVIRONMENT,
  STATUSES
} from './config'
import { getDefaultResponseMapper, parseError, uniqPrefix } from './helper'
import { getEntityReducer, getActionsReducer } from './selector'

/**
 * Created uniq prefix for action type
 *
 * @memberOf action
 * @private
 * @param {String} name - actionSchema key
 * @returns {String} - `${name} ${uniqPrefix}` name with uniq prefix
 * @private
 */
const _makeActionUniqId = name => {
  return `${ACTION_TYPE_PREFIX} ${name} ${uniqPrefix}`
}

/**
 * Make action handler wrapper
 *
 * @memberOf action
 * @param {Function} Action - Action func
 * @param {String} actionId - uniq action id and type
 * @param {String} parentActionId - uniq parent action id and type (when action created with clone/withname/prefix)
 * @param {String} statusName - name of action status pending/success/error
 * @param {Object} actionSchema - normalizr actionSchema
 * @returns {Function} - action handler wrapper
 * @private
 */
const _makeActionHandler = (
  Action,
  actionId,
  parentActionId,
  statusName,
  actionSchema
) => {
  /**
   * Action handler
   *
   * @param {String} error - action error text
   * @param {Object|Array} payloadSource - response from action result
   * @returns {Object} - action dispatch body
   */
  return function(error, payloadSource, sourceResult) {
    if (statusName === 'success' && payloadSource === undefined) {
      error = 'Empty payload'
      statusName = 'error'
    }

    // flag data in progress (all actions is async)
    const isFetching = statusName === 'pending'

    // error message text
    const errorText =
      !isFetching && error
        ? error
        : !isFetching && payloadSource === undefined
          ? 'Empty data'
          : error ? error : ''

    // flag
    const hasError = Boolean(errorText)

    // id key, ids or id dispatch({...action.data.id}) or  dispatch({...action.data.ids})
    const actionDataKey =
      !isFetching && !hasError
        ? Array.isArray(payloadSource) ? ACTION_IDS_KEY : ACTION_ID_KEY
        : undefined

    // action flag response data is array or not
    const isArrayData = actionDataKey === ACTION_IDS_KEY

    // action property entity (actionSchema id attribute) name
    const entityName = actionSchema.key

    // list of ids or id from payload
    const payload =
      !isFetching && !hasError && payloadSource
        ? isArrayData
          ? payloadSource.map(item => Action.getEntityId(item))
          : Action.getEntityId(payloadSource)
        : undefined

    /**
     *
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
      type: `${actionId}`,
      prefix: ACTION_TYPE_PREFIX,
      actionId,
      parentActionId,

      status: statusName,
      time: new Date().getTime(),
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
const _makeAction = (
  actionId,
  parentActionId,
  actionSchema,
  actionMethod,
  queryBuilder,
  responseMapper
) => {
  const _makeWithId = newActionId => {
    newActionId = newActionId.toString().trim()

    if (!newActionId) {
      throw new Error('Action id must be not empty')
    }

    const parentActionId = Action.actionId()
    const nextActionId = [parentActionId, `${newActionId}`].join(' ')

    return _makeAction(
      nextActionId,
      parentActionId,
      actionSchema,
      actionMethod,
      queryBuilder,
      responseMapper
    )
  }

  /**
   * Private create action function
   *
   * @memberOf action._makeAction
   *
   * @returns {Function}
   * @constructor
   */
  function Action() {
    const args = Array.prototype.slice.call(arguments)
    const actionResponseMapper = responseMapper || getDefaultResponseMapper()

    const [pending, success, error] = STATUSES.map(statusName =>
      _makeActionHandler(
        Action,
        actionId,
        parentActionId,
        statusName,
        actionSchema
      )
    )

    const actionResultCallback = (dispatch, getState, err, result) => {
      try {
        let errorMessage = parseError(err)
        let parsedResponse = errorMessage
          ? undefined
          : actionResponseMapper(result)

        errorMessage
          ? dispatch(error(errorMessage, undefined))
          : dispatch(success(undefined, parsedResponse, result))
      } catch (e) {
        dispatch(error(String(`${e.message || e}`), undefined))
        throw e
      }
    }

    const _makeQueryBuilder = (level, dispatch, getState, args, method) => {
      let typeOfMethod = typeof method

      if (
        typeOfMethod === 'string' ||
        typeOfMethod === 'number' ||
        typeOfMethod === 'object' ||
        typeOfMethod === 'boolean'
      ) {
        return method
      }

      if (method instanceof Promise) {
        return method
          .apply(this, level === 0 ? args : [dispatch, getState])
          .then(resp => {
            _makeQueryBuilder(level + 1, dispatch, getState, args, resp)
          })
          .catch(err => {
            throw err
          })
      }

      if (typeOfMethod === 'function') {
        let result = method.apply(
          this,
          level === 0 ? args : [dispatch, getState]
        )
        return _makeQueryBuilder(level + 1, dispatch, getState, args, result)
      }
    }

    const _callActionMethod = (actionMethod, args, dispatch, getState) => {
      args = Array.isArray(args) ? args : [args]

      let actionResult = actionMethod.apply(this, args)

      if (actionResult instanceof Promise) {
        return actionResult
          .then(resp => actionResultCallback(dispatch, getState, false, resp))
          .catch(err =>
            actionResultCallback(dispatch, getState, err, undefined)
          )
      }

      if (typeof actionResult === 'function') {
        actionResult = actionResult.call(this, dispatch, getState)

        if (!actionResult) {
          return actionResultCallback(dispatch, getState, undefined, undefined)
        }

        if (actionResult instanceof Promise) {
          return actionResult
            .then(resp => actionResultCallback(dispatch, getState, false, resp))
            .catch(err =>
              actionResultCallback(dispatch, getState, err, undefined)
            )
        }
      }

      return actionResultCallback(dispatch, getState, false, actionResult)
    }

    // action body
    return function(dispatch, getState) {
      dispatch(pending())

      try {
        let compiledActionArgs = queryBuilder
          ? _makeQueryBuilder(0, dispatch, getState, args, queryBuilder)
          : args

        if (compiledActionArgs instanceof Promise) {
          return compiledActionArgs
            .then(resp =>
              _callActionMethod(actionMethod, resp, dispatch, getState)
            )
            .catch(err => {
              throw err
            })
        }

        _callActionMethod(actionMethod, compiledActionArgs, dispatch, getState)
      } catch (e) {
        actionResultCallback(dispatch, getState, e, undefined)
      }
    }
  }

  /**
   * @memberOf action._makeAction.Action
   * @type {Function}
   * @returns {Function} - returns action id
   */
  Action.type = Action.actionId = Action.toString = Action.valueOf = () => {
    return actionId
  }

  /**
   * @memberOf action._makeAction.Action
   * @param {Object} item - source entity data
   *
   * @type {Function}
   * @returns {Function} - returns id from source
   */
  Action.getEntityId = item => {
    return actionSchema.getId(item)
  }

  /**
   * @memberOf action._makeAction.Action
   * @type {Function}
   * @returns {Object} - returns actionSchema of action
   */
  Action.getSchema = () => {
    return actionSchema
  }

  /**
   * @memberOf action._makeAction.Action
   * @type {Function}
   * @returns {Function} - returns entity uniq name (id)
   */
  Action.getEntityName = () => {
    return actionSchema.key
  }

  /**
   * @memberOf action._makeAction.Action
   * @type {Function}
   * @returns {Action} - returns some action with new uniq id
   */
  Action.clone = () => {
    return createAction(
      actionSchema,
      actionMethod,
      queryBuilder,
      responseMapper
    )
  }

  /**
   * @memberOf action._makeAction.Action
   * @type {Function}
   * @returns {Action} - returns some action with prefix-id
   */
  Action.withPrefix = (...prefix) => {
    return _makeWithId(prefix.join('-'))
  }

  /**
   * @memberOf action._makeAction.Action
   * @type {Function}
   * @returns {Action} - returns some action with name-id (see prefix)
   */
  Action.withName = name => {
    return _makeWithId(name)
  }

  /**
   * Clear action store data
   *
   * @memberOf action._makeAction.Action
   * @type {Function}
   *
   * @example
   * store.dispatch(userLoginAction.empty())
   *
   * @returns {Undefined} - returns None, only clear action data
   */
  Action.empty = () => {
    return (dispatch, getState) => {
      dispatch({
        time: new Date().getTime(),
        type: ACTION_EMPTY_TYPE_NAME,
        prefix: ACTION_TYPE_PREFIX,
        actionId: Action.actionId()
      })
    }
  }

  return Action
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

  const actionId = _makeActionUniqId(actionSchema.key)

  return _makeAction(
    actionId,
    '',
    actionSchema,
    actionMethod,
    queryBuilder,
    responseMapper
  )
}

if (IS_TEST_ENVIRONMENT) {
  module.exports._makeActionUniqId = _makeActionUniqId
  module.exports._makeActionHandler = _makeActionHandler
  module.exports._makeAction = _makeAction
}
