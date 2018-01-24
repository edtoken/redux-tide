import 'should'
import sinon from 'sinon'
import { schema } from 'normalizr'
import {
  ACTION_EMPTY_TYPE_NAME,
  ACTION_ID_KEY,
  ACTION_IDS_KEY,
  ACTION_TYPE_PREFIX,
  ACTIONS_REDUCER_NAME,
  ENTITIES_REDUCER_NAME,
  IS_TEST_ENVIRONMENT,
  setDefaultResponseMapper,
  setDenormalize,
  STATUSES
} from '../src/config'

import { createAction } from '../src/action'

require('should-sinon')

describe('config is valid', function() {
  it('should define all required variables', function() {
    IS_TEST_ENVIRONMENT.should.not.be.undefined()
    STATUSES.should.not.be.undefined()
    ACTION_ID_KEY.should.not.be.undefined()
    ACTION_IDS_KEY.should.not.be.undefined()
    ACTION_TYPE_PREFIX.should.not.be.undefined()
    ACTIONS_REDUCER_NAME.should.not.be.undefined()
    ENTITIES_REDUCER_NAME.should.not.be.undefined()
    ACTION_EMPTY_TYPE_NAME.should.not.be.undefined()
    setDefaultResponseMapper.should.not.be.undefined()
    setDenormalize.should.not.be.undefined()
  })

  it('setDefaultResponseMapper and setDenormalize should be typeof function', function() {
    const r1 = typeof setDefaultResponseMapper
    r1.should.be.equal('function')

    const r2 = typeof setDenormalize
    r2.should.be.equal('function')
  })

  it('setDefaultResponseMapper is working', function() {
    const originResp = { data: 'DATA_VALUE' }

    const defaultMapper = sinon.spy(resp => {
      resp.should.be.deepEqual(originResp)
      return resp.data
    })
    const entitySchema = new schema.Entity('users', {})

    const actionMethod = () => {
      return new Promise((resolve, reject) => {
        resolve(originResp)
      })
    }

    setDefaultResponseMapper(defaultMapper)
    setDefaultResponseMapper.callback.should.be.deepEqual(defaultMapper)

    const action = createAction(entitySchema, actionMethod)
    action()(() => {}, () => {})
    // todo fix test
    // setDefaultResponseMapper.callback.should.be.called()
  })
})
