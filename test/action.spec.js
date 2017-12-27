import 'should'

import {
  _makeActionHandler,
  _makeActionUniqId,
  _makeAction
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
  it('_makeAction should be called', function() {
    const result = _makeAction('', '', {}, () => {}, () => '')
    result.should.not.be.undefined()
  })
  it('_makeAction should be returned function', function() {
    const result = typeof _makeAction('', '', {}, () => {}, () => '')
    result.should.be.equal('function')
  })
})
