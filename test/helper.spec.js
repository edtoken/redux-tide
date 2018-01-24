import { parseError, uniqPrefix } from '../src/helper'

describe('helper uniqPrefix', function() {
  it('created uniq prefixed', function() {
    const result = new Set(
      [uniqPrefix, uniqPrefix, uniqPrefix, uniqPrefix].map(p => p.toString())
    )
    result.should.be.size(4)
  })
})

describe('helper parseError', function() {
  it('parseError false', function() {
    const result = parseError(false)
    result.should.be.equal(false)
  })
  it('parseError string value', function() {
    const result = parseError('string value')
    result.should.be.equal('string value')
  })
  it('parseError Error object', function() {
    try {
      const result = parseError(new Error('error message'))
      result.should.be.equal('error message')
    } catch (e) {
      throw e
    }
  })
  it('parseError common data', function() {
    const result = parseError(123123123)
    result.should.be.equal('Error: 123123123')
  })
})
