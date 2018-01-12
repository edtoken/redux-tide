import 'should'
import { schema } from 'normalizr'
import { fromJS } from 'immutable'

import { ENTITIES_REDUCER_NAME, ACTIONS_REDUCER_NAME } from '../src/config'
import {
  getActionData,
  getEntityItemsByAction,
  getEntityItemsByEntityName,
  getEntityItemsBySchema,
  getEntityReducer
} from '../src/selector'
import { createAction } from '../src/action'

it('selector getActionData', function() {
  const entitySchema = new schema.Entity('users', {})

  const action = createAction(entitySchema, new Promise(() => {}))

  const actionId = action.actionId()

  const state = {
    [ACTIONS_REDUCER_NAME]: fromJS({
      [actionId]: {
        actionId,
        status: '',
        time: '',
        hasError: '',
        errorText: '',
        actionDataKey: 'id',
        id: 5,
        isFetching: false,
        sourceResult: undefined,
        prevPayload: undefined,
        payload: undefined
      }
    }),
    [ENTITIES_REDUCER_NAME]: fromJS({
      users: {
        5: {
          id: 5,
          name: 'vasya'
        }
      }
    })
  }

  const result = getActionData(action)(state)

  result.should.be.deepEqual({
    status: '',
    time: '',
    hasError: '',
    errorText: '',
    isFetching: false,
    actionId: '@@tide users uniq1',
    sourceResult: undefined,
    payload: { id: 5, name: 'vasya' },
    prevPayload: undefined
  })
})

it('selector getEntityReducer', function() {
  const reducerState = fromJS({})
  const result = getEntityReducer({
    [ENTITIES_REDUCER_NAME]: reducerState
  })
  result.should.deepEqual(reducerState)
})

it('selector getEntityItemsBySchema', function() {
  const entitySchema = new schema.Entity('users', {})

  const state = {
    [ENTITIES_REDUCER_NAME]: fromJS({
      users: {}
    })
  }

  const result = getEntityItemsBySchema(entitySchema)(state)
  result.should.deepEqual(state[ENTITIES_REDUCER_NAME].get('users'))
})

it('selector getEntityItemsByAction', function() {
  const actionSchema = new schema.Entity('users', {})
  const action = createAction(actionSchema, () => ({}))
  const state = {
    [ENTITIES_REDUCER_NAME]: fromJS({
      users: {}
    })
  }

  const result = getEntityItemsByAction(action)(state)
  result.should.deepEqual(state[ENTITIES_REDUCER_NAME].get('users'))
})

it('selector getEntityItemsByEntityName', function() {
  const state = {
    [ENTITIES_REDUCER_NAME]: fromJS({
      users: {}
    })
  }

  const result = getEntityItemsByEntityName('users')(state)
  result.should.deepEqual(state[ENTITIES_REDUCER_NAME].get('users'))
})
