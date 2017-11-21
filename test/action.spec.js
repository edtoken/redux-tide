import 'should'

import {_defaultResponseMapper, _makeActionHandler, _makeActionUniqId} from '../src/action'

describe('action _defaultResponseMapper ', function() {
  it('_defaultResponseMapper returns simple object', function() {
    const data = {
      data: {}
    }
    const result = _defaultResponseMapper(data)
    result.should.be.deepEqual(data)
  })

  it('_defaultResponseMapper returned nested', function() {
    const data = {
      data: {
        key: {
          key: {
            key: {
              key: {
                key: 'value'
              }
            }
          }
        }
      }

    }
    const result = _defaultResponseMapper(data)
    result.should.be.deepEqual(data)
  })
})

describe('action _makeActionUniqId ', function() {
  it('_makeActionUniqId returns uniquie ids', function() {
    const result = new Set([_makeActionUniqId('name'), _makeActionUniqId('name'), _makeActionUniqId('name'), _makeActionUniqId('name')])
    result.should.be.size(4)
  })
})

describe('action _makeActionHandler ', function() {
  it('_makeActionHandler should be called', function() {
    const result = _makeActionHandler('', '', '', {})
    result.should.not.be.undefined()
  })
})