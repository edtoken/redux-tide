'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @namespace config
 */

/**
 *
 * @memberOf config
 * @type {Boolean}
 */
var IS_TEST_ENVIRONMENT = exports.IS_TEST_ENVIRONMENT = process.env.NODE_ENV === 'test';

/**
 * Default action statuses
 *
 * @memberOf config
 * @type {Array}
 */
var STATUSES = exports.STATUSES = ['pending', 'success', 'error'];

/**
 * Key action data for single entity
 *
 * @memberOf config
 * @const
 * @type {String}
 */
var ACTION_ID_KEY = exports.ACTION_ID_KEY = 'id';

/**
 * Key action data for array entity
 *
 * @memberOf config
 * @const
 * @type {String}
 */
var ACTION_IDS_KEY = exports.ACTION_IDS_KEY = 'ids';

/**
 * Plugin action types prefix
 *
 * @memberOf config
 * @const
 * @type {String}
 */
var ACTION_TYPE_PREFIX = exports.ACTION_TYPE_PREFIX = '@@tide';

/**
 * Redux store actions reducer name
 *
 * @memberOf config
 * @const
 * @type {String}
 */
var ACTIONS_REDUCER_NAME = exports.ACTIONS_REDUCER_NAME = ACTION_TYPE_PREFIX + '-actions';

/**
 * Redux store entities reducer name
 *
 * @memberOf config
 * @const
 * @type {String}
 */
var ENTITIES_REDUCER_NAME = exports.ENTITIES_REDUCER_NAME = ACTION_TYPE_PREFIX + '-entities';

/**
 * Action type name for clear action data
 *
 * @memberOf config
 * @const
 * @type {String}
 */
var ACTION_EMPTY_TYPE_NAME = exports.ACTION_EMPTY_TYPE_NAME = ACTION_TYPE_PREFIX + '-clear';

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
var setDefaultResponseMapper = exports.setDefaultResponseMapper = function setDefaultResponseMapper(callback) {
  setDefaultResponseMapper.callback = callback;
};

var setDenormalize = exports.setDenormalize = function setDenormalize(denormalize) {
  setDenormalize.denormalize = denormalize;
};