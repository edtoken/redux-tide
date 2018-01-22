/**
 * @namespace config
 */

/**
 *
 * @memberOf config
 * @type {Boolean}
 */
export const IS_TEST_ENVIRONMENT = process.env.NODE_ENV === 'test'

/**
 * Default action statuses
 *
 * @memberOf config
 * @type {Array}
 */
export const STATUSES = ['pending', 'success', 'error']

/**
 * Key action data for single entity
 *
 * @memberOf config
 * @const
 * @type {String}
 */
export const ACTION_ID_KEY = 'id'

/**
 * Key action data for array entity
 *
 * @memberOf config
 * @const
 * @type {String}
 */
export const ACTION_IDS_KEY = 'ids'

/**
 * Plugin action types prefix
 *
 * @memberOf config
 * @const
 * @type {String}
 */
export const ACTION_TYPE_PREFIX = '@@tide'

/**
 * Redux store actions reducer name
 *
 * @memberOf config
 * @const
 * @type {String}
 */
export const ACTIONS_REDUCER_NAME = `${ACTION_TYPE_PREFIX}-actions`

/**
 * Redux store entities reducer name
 *
 * @memberOf config
 * @const
 * @type {String}
 */
export const ENTITIES_REDUCER_NAME = `${ACTION_TYPE_PREFIX}-entities`

/**
 * Action type name for clear action data
 *
 * @memberOf config
 * @const
 * @type {String}
 */
export const ACTION_EMPTY_TYPE_NAME = `${ACTION_TYPE_PREFIX}-empty`

/**
 * Action type name for clear entity data from entity reducer
 *
 * @memberOf config
 * @const
 * @type {String}
 */
export const ACTION_CLEAN_TYPE_NAME = `${ACTION_TYPE_PREFIX}-clean`

/**
 * replaced default response mapper to callback
 *
 * @memberOf config
 * @function
 *
 * @param callback
 *
 * @example
 * import { setDefaultResponseMapper } from 'redux-tide'
 *
 * setDefaultResponseMapper(resp => {
 *  return resp.data
 * })
 * // this will be replaced all action success responces to resp.data
 *
 */
export const setDefaultResponseMapper = callback => {
  setDefaultResponseMapper.callback = callback
}

export const setDenormalize = denormalize => {
  setDenormalize.denormalize = denormalize
}

if (IS_TEST_ENVIRONMENT) {
  setDenormalize(require('normalizr').denormalize)
}
