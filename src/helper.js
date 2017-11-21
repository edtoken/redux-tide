/**
 * @namespace helper
 */

const config = require('./config')

let START_UNIQ_PREFIX = 0

export const uniqPrefix = (() => {
  const uniq = () => {}
  uniq.toString = uniq.valueOf = () => {
    START_UNIQ_PREFIX += 1
    return `uniq${START_UNIQ_PREFIX}`
  }
  return uniq
})()

export const parseError = err => {
  const typeOfError = typeof err

  if (err === false) {
    return false
  }
  if (typeOfError === 'string') {
    return err
  }
  if (err instanceof Error) {
    if (err.stack) {
      console.error(err)
    }
    return err.message || err.toString()
  }
  return `Error: ${String(err)}`
}

export const denormalize = (input, schema, entities) => {
  return config.setDenormalize.denormalize(input, schema, entities)
}

/**
 * Action success response default mapper
 * does - nothing
 *
 * @memberOf helper
 * @private
 * @param {*} resp - action method response
 * @returns {*} - returns original resp
 * @private
 */
const _defaultResponseMapper = resp => {
  return resp
}

export const getDefaultResponseMapper = () => {
  return config.setDefaultResponseMapper.callback || _defaultResponseMapper
}
