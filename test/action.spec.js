import 'should'

import {
  _makeActionHandler,
  _makeActionUniqId
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
    const result = _makeActionHandler('', '', '', {})
    result.should.not.be.undefined()
  })
})
