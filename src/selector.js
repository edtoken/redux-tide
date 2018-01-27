/**
 * @namespace selector
 */

import { createSelector } from 'reselect'
import { denormalize } from './helper'
import {
  ACTIONS_REDUCER_NAME,
  ENTITIES_REDUCER_NAME,
  IS_TEST_ENVIRONMENT
} from './config'

const defaultActionDataOutput = {
  status: '',
  time: '',
  hasError: '',
  errorText: '',
  isFetching: false
}

const deepCopy = obj => {
  return JSON.parse(JSON.stringify(obj))
}

const makeDefaultActionData = () => {
  return deepCopy(defaultActionDataOutput)
}

const getPayloadIds = (dataKey, isArray, actionState, stateKey) => {
  if (!dataKey) {
    return undefined
  }

  const payloadIds = actionState.get(stateKey || dataKey)

  if (!payloadIds) {
    return undefined
  }

  return isArray ? payloadIds : [payloadIds]
}

const makeActionDenormalizedPayload = (
  isArray,
  payloadIds,
  schema,
  entities
) => {
  // return empty immutable object
  if (!payloadIds) {
    return undefined
  }

  const result = denormalize(payloadIds, [schema], entities).filter(v => v)

  return isArray ? result : result[0]
}

const makeActionDenormalizedPayloads = (
  isFetching,
  actionSchema,
  entities,
  payloadIsArray,
  actionDataKey,
  entityState,
  actionState
) => {
  if (!actionDataKey) {
    return undefined
  }

  if (!entityState) {
    return {
      payload: payloadIsArray ? [] : undefined,
      prevPayload: payloadIsArray ? [] : undefined
    }
  }

  const actionPayloadIds = getPayloadIds(
    actionDataKey,
    payloadIsArray,
    actionState
  )
  const actionPrevPayloadIds = getPayloadIds(
    actionDataKey,
    payloadIsArray,
    actionState,
    `prev${actionDataKey}`
  )

  return {
    payload: makeActionDenormalizedPayload(
      payloadIsArray,
      actionPayloadIds,
      actionSchema,
      entities
    ),
    prevPayload: makeActionDenormalizedPayload(
      payloadIsArray,
      actionPrevPayloadIds,
      actionSchema,
      entities
    )
  }
}

const _makeGetActionData = (action, actionId, entityName, actionSchema) => {
  return createSelector(
    [
      state => state[ACTIONS_REDUCER_NAME].get(actionId),
      state => state[ENTITIES_REDUCER_NAME].get(entityName),
      state => state[ENTITIES_REDUCER_NAME]
    ],
    (actionState, entityState, entities) => {
      if (!actionState) {
        return makeDefaultActionData()
      }

      const payloadIsArray = actionState.get('isArrayData')
      const dataKey = actionState.get('actionDataKey')
      const isFetching = actionState.get('status') === 'pending'

      return Object.assign(
        makeDefaultActionData(),
        {
          actionId,
          sourceResult: actionState.get('sourceResult'),
          status: actionState.get('status'),
          time: actionState.get('time'),
          hasError: actionState.get('hasError'),
          errorText: actionState.get('errorText'),
          isFetching: actionState.get('isFetching')
        },
        makeActionDenormalizedPayloads(
          isFetching,
          actionSchema,
          entities,
          payloadIsArray,
          dataKey,
          entityState,
          actionState
        )
      )
    }
  )
}

export const getActionData = action => {
  const actionId = action.actionId()
  const entityName = action.getEntityName()
  const actionEntitySchema = action.getSchema()

  return (state, props) => {
    const selectorGetActionData = _makeGetActionData(
      action,
      actionId,
      entityName,
      actionEntitySchema
    )
    return selectorGetActionData(state, props)
  }
}

export const getMergedActionsData = (...actions) => {
  return createSelector(
    actions.map(action => getActionData(action)),
    (...actionsData) => {
      const sortedByUpate = actionsData.sort((a, b) => a.time - b.time)

      return sortedByUpate.reduce((memo, item) => {
        return Object.assign(memo, item, {
          payload: memo.payload
            ? memo.payload.merge(item.payload)
            : item.payload,
          prevPayload: memo.prevPayload
            ? memo.prevPayload.merge(item.prevPayload)
            : item.prevPayload
        })
      })
    }
  )
}

export const getActionsReducer = state => state[ACTIONS_REDUCER_NAME]

export const getEntityReducer = state => state[ENTITIES_REDUCER_NAME]

export const getEntityItemsBySchema = entitySchema => {
  return createSelector([getEntityReducer], entities => {
    return entities.get(entitySchema.key)
  })
}

export const getEntityItemsByAction = action => {
  return createSelector([getEntityReducer], entities => {
    return entities.get(action.getEntityName())
  })
}

export const getEntityItemsByEntityName = name => {
  return createSelector([getEntityReducer], entities => {
    return entities.get(name)
  })
}

export const denomalizeEntityItemById = (id, schema, entities) => {
  return denormalize(id, schema, entities)
}

if (IS_TEST_ENVIRONMENT) {
  module.exports.defaultActionDataOutput = defaultActionDataOutput
  module.exports._makeGetActionData = _makeGetActionData
}
