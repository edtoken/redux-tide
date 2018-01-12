import 'should'
import sinon from 'sinon'
import { schema } from 'normalizr'

require('should-sinon')

import {
  _makeActionHandler,
  _makeActionUniqId,
  _makeAction,
  createAction
} from '../src/action'

describe('action _makeActionUniqId ', function() {
  it('_makeActionUniqId returns uniquie ids', function() {
    const result = new Set([
      _makeActionUniqId('name'),
      _makeActionUniqId('name'),
      _makeActionUniqId('name'),
      _makeActionUniqId('name')
    ])
    result.should.be.size(4)
  })
})

describe('action _makeActionHandler ', function() {
  it('_makeActionHandler should be called', function() {
    const result = _makeActionHandler('', '', '', {}, {})
    result.should.not.be.undefined()
  })
  it('_makeActionHandler returns freeze object', function() {
    const result = _makeActionHandler(
      '',
      '',
      '',
      {},
      { key: 'actionSchemaKey' }
    )()
    try {
      result.payload = ['rewrite custom payload']
      throw new Error('You can rewrite action response')
    } catch (e) {
      e.message.should.be.equal(
        "Cannot assign to read only property 'payload' of object '#<Object>'"
      )
    }
  })
  it('_makeActionHandler should be return valid key names and count', function() {
    const result = _makeActionHandler('', '', '', {}, {})()
    Object.keys(result).should.be.deepEqual([
      'type',
      'prefix',
      'actionId',
      'parentActionId',
      'status',
      'time',
      'isArrayData',
      'actionDataKey',
      'entityName',
      'isFetching',
      'errorText',
      'hasError',
      'actionSchema',
      'sourceResult',
      'payload',
      'payloadSource'
    ])
  })
})

describe('action _makeAction ', function() {
  const makeAction = () => _makeAction('', '', {}, () => {}, () => '')
  it('_makeAction should be called', function() {
    const result = makeAction()
    result.should.not.be.undefined()
  })
  it('_makeAction should be returned function', function() {
    const result = typeof makeAction()
    result.should.be.equal('function')
  })
  it('_makeAction raise error if actionId withPrefix is empty', function() {
    const result = makeAction()
    try {
      result.withPrefix()
      throw new Error('raise error if actionId withPrefix is empty')
    } catch (e) {
      // console.log(e)
    }
  })
  it('_makeAction raise error if actionId withName is empty', function() {
    const result = makeAction()
    try {
      result.withName()
      throw new Error('raise error if actionId withName is empty')
    } catch (e) {
      // console.log(e)
    }
  })
})

describe('action createAction init params', function() {
  it('actionSchema should be check', function() {
    try {
      createAction()
    } catch (e) {
      if (!~e.indexOf('actionSchema argument is required')) {
        throw new Error(
          'actionSchema should be required and raise error if is undefined'
        )
      }
    }
  })

  it('actionMethod should be check', function() {
    try {
      createAction({})
    } catch (e) {
      if (!~e.indexOf('actionMethod argument is required')) {
        throw new Error(
          'actionMethod should be required and raise error if is undefined'
        )
      }
    }
  })

  it('responseMapper should be check', function() {
    try {
      createAction({}, () => {}, () => {}, 'asd')
    } catch (e) {
      if (!~e.indexOf('responseMapper must be function')) {
        throw new Error('responseMapper must be check function')
      }
    }
  })

  it('createAction call actionMethod', function() {
    const entitySchema = new schema.Entity('users', {})
    const successMethod = sinon.spy()

    const actionMethod = new Promise((resolve, reject) => {
      resolve('success')
      successMethod()
    })

    const action = createAction(entitySchema, actionMethod)
    action(5)
    successMethod.should.be.calledOnce()
  })

  it('createAction should be call queryBuilder and valid params', function() {
    const entitySchema = new schema.Entity('users', {})
    const queryBuilder = sinon.spy(id => `GET users/${id}`)

    const actionMethod = function(queryBuilderResult) {
      queryBuilderResult.should.be.equal('GET users/5')
    }

    const action = createAction(entitySchema, actionMethod, queryBuilder)
    action(5)(() => {}, () => {})
    queryBuilder.should.be.calledOnce()
  })
})

describe('action createAction uniq action ids', function() {
  const makeAction = () => createAction({ key: '' }, () => {}, ``)

  it('type should be equal actionId toString valueOf', function() {
    const action1 = makeAction()
    action1.type().should.be.equal(action1.actionId())
    action1.type().should.be.equal(action1.toString())
    action1.type().should.be.equal('' + action1)
  })

  it('clone should be returned new uniq id', function() {
    const action1 = makeAction()
    const action2 = action1.clone()
    action1.actionId().should.not.equal(action2.actionId())
  })

  it('withPrefix should be returned new uniq id', function() {
    const action1 = makeAction()
    const action2 = action1.withPrefix('withPrefix')

    action1.actionId().should.not.equal(action2.actionId())
    action1.actionId().should.not.match(/withPrefix/)
    action2.actionId().should.match(/withPrefix/)
  })
})
