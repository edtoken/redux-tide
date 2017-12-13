import 'should'
import { schema } from 'normalizr'
import { fromJS } from 'immutable'

import { ENTITIES_REDUCER_NAME } from '../src/config'
import {
  getEntityItemsByAction,
  getEntityItemsByEntityName,
  getEntityItemsBySchema,
  getEntityReducer
} from '../src/selector'
import { createAction } from '../src/action'

it('selector getActionData', function() {})

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
