'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @namespace helper
 */

var config = require('./config');

var START_UNIQ_PREFIX = 0;

var uniqPrefix = exports.uniqPrefix = function () {
  var uniq = function uniq() {};
  uniq.toString = uniq.valueOf = function () {
    START_UNIQ_PREFIX += 1;
    return 'uniq' + START_UNIQ_PREFIX;
  };
  return uniq;
}();

var parseError = exports.parseError = function parseError(err) {
  var typeOfError = typeof err === 'undefined' ? 'undefined' : _typeof(err);

  if (err === false || typeOfError === 'undefined') {
    return false;
  }
  if (typeOfError === 'string') {
    return err;
  }
  if (err instanceof Error) {
    if (err.stack && !config.IS_TEST_ENVIRONMENT) {
      console.error(err);
    }
    return err.message || err.toString();
  }
  return 'Error: ' + String(err);
};

var denormalize = exports.denormalize = function denormalize(input, schema, entities) {
  return config.setDenormalize.denormalize(input, schema, entities);
};

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
var _defaultResponseMapper = function _defaultResponseMapper(resp) {
  return resp;
};

var getDefaultResponseMapper = exports.getDefaultResponseMapper = function getDefaultResponseMapper() {
  return config.setDefaultResponseMapper.callback || _defaultResponseMapper;
};