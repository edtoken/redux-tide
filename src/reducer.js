/**
 * @namespace reducer
 */

import { fromJS } from 'immutable'
import { normalize } from 'normalizr'

import {
  ACTION_DELETE_TYPE_NAME,
  ACTION_EMPTY_TYPE_NAME,
  ACTION_TYPE_PREFIX,
  ACTIONS_REDUCER_NAME,
  ENTITIES_REDUCER_NAME
} from './config'

const defaultEmptyActionData = {
  array: [],
  notArray: ''
}

const actionDefaultData = {
  isFetching: false,
  hasError: false,
  errorText: '',
  status: '',
  time: ''
}

const makeActionsReducer = defaultActionsState => {
  return (state = defaultActionsState, action) => {
    if (!action.prefix || action.prefix !== ACTION_TYPE_PREFIX) {
      return state
    }

    const {
      status,
      time,
      actionId,
      payload,
      sourceResult,
      isFetching,
      errorText,
      hasError,
      isArrayData,
      actionDataKey,
      actionSchema
    } = action

    const entityKey = actionSchema.key

    // action.clear
    if (action.type === ACTION_EMPTY_TYPE_NAME) {
      return state.set(
        actionId,
        fromJS(Object.assign({ entityKey }, actionDefaultData, { time }))
      )
    }

    const emptyData = actionDataKey
      ? defaultEmptyActionData[isArrayData ? 'array' : 'notArray']
      : undefined

    let actionState = state.get(actionId)

    // when action state is not defined need set new value
    if (!actionState) {
      state = state.set(actionId, fromJS(actionDefaultData))
      actionState = state.get(actionId)
    }

    // delete entity id from actions
    if (action.type === ACTION_DELETE_TYPE_NAME) {
      console.log('action delete', actionState)
      return state
    }

    actionState = actionState.merge({
      status,
      time,
      hasError,
      errorText,
      isFetching,
      isArrayData,
      actionDataKey
    })

    if (actionDataKey) {
      actionState = actionState.set(
        `prev${actionDataKey}`,
        actionState.get(actionDataKey, emptyData)
      )
    }

    if (sourceResult) {
      actionState = actionState.set('sourceResult', sourceResult)
    }

    if (!hasError && actionDataKey && payload) {
      actionState = actionState.set(actionDataKey, payload, {})
    }

    return state.set(actionId, actionState)
  }
}

const makeNormalizedPayloadSource = (
  actionSchema,
  payloadSource,
  isArrayData,
  isFetching,
  hasError
) => {
  if (payloadSource && !hasError && !isFetching) {
    const normalizeData = isArrayData ? payloadSource : [payloadSource]
    return normalize(normalizeData, [actionSchema])
  }
  return undefined
}

const makeEntitiesReducer = defaultEntitiesState => {
  return function(state = defaultEntitiesState, action) {
    if (!action.prefix || action.prefix !== ACTION_TYPE_PREFIX) {
      return state
    }

    const {
      isFetching,
      hasError,
      isArrayData,
      payloadSource,
      actionSchema
    } = action

    const normalizedPayloadSource = makeNormalizedPayloadSource(
      actionSchema,
      payloadSource,
      isArrayData,
      isFetching,
      hasError
    )

    const newEntitiesItems = normalizedPayloadSource
      ? normalizedPayloadSource.entities
      : {}

    // delete entity id from actions
    if (action.type === ACTION_DELETE_TYPE_NAME) {
      console.log('reducer delete')
      return state
    }

    // merge entity item data
    for (let entityName in newEntitiesItems) {
      for (let entityId in newEntitiesItems[entityName]) {
        let prevEntityState = state.getIn([entityName, entityId])
        let nextEntityState = fromJS(newEntitiesItems[entityName][entityId])

        if (!prevEntityState) {
          state = state.setIn([entityName, entityId], nextEntityState)
          continue
        }

        state = state.mergeIn([entityName, entityId], nextEntityState)
      }
    }

    // todo add isFetching attribute in entity item
    return state
  }
}
/**
 * This function returns object with actions reducer and entities reducer
 *
 * @memberOf reducer
 * @function
 *
 * @example
 * import { schema } from 'normalizr'
 * import { createReducers } from 'redux-tide'
 *
 * const userSchema = new schema.Entity('user', {})
 * const commentSchema = new schema.Entity('comment', { user:userSchema }, { idAttribute: 'comment_id' })
 *
 * const rootReducer = {
 *  ...createReducers(userSchema, commentSchema)
 * }
 * const store = createStore(
 *  combineReducers(rootReducer),
 *  initialState,
 *  compose(...enhancers)
 * )
 *
 * @param {Arguments} appSchema
 * @returns {Object} - {[ACTIONS_REDUCER_NAME]:Function, [ENTITIES_REDUCER_NAME]:Function}
 */
export const createReducers = (...appSchema) => {
  // default state for actions
  const defaultActionsState = fromJS({})

  // default state for entities
  const defaultEntitiesState = fromJS(
    appSchema.reduce((memo, item) => {
      memo[item.key] = {}
      return memo
    }, {})
  )
  return {
    [ACTIONS_REDUCER_NAME]: makeActionsReducer(defaultActionsState),
    [ENTITIES_REDUCER_NAME]: makeEntitiesReducer(defaultEntitiesState)
  }
}
