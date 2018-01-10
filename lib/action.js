'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAction = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @namespace action
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _config = require('./config');

var _helper = require('./helper');

var _selector = require('./selector');

/**
 * Created uniq prefix for action type
 *
 * @memberOf action
 * @private
 * @param {String} name - actionSchema key
 * @returns {String} - `${name} ${uniqPrefix}` name with uniq prefix
 * @private
 */
var _makeActionUniqId = function _makeActionUniqId(name) {
  return _config.ACTION_TYPE_PREFIX + ' ' + name + ' ' + _helper.uniqPrefix;
};

/**
 * Make action handler wrapper
 *
 * @memberOf action
 * @param {Function} Action - Action func
 * @param {String} actionId - uniq action id and type
 * @param {String} parentActionId - uniq parent action id and type (when action created with clone/withname/prefix)
 * @param {String} statusName - name of action status pending/success/error
 * @param {Object} actionSchema - normalizr actionSchema
 * @returns {Function} - action handler wrapper
 * @private
 */
var _makeActionHandler = function _makeActionHandler(Action, actionId, parentActionId, statusName, actionSchema) {
  /**
   * Action handler
   *
   * @param {String} error - action error text
   * @param {Object|Array} payloadSource - response from action result
   * @returns {Object} - action dispatch body
   */
  return function (error, payloadSource, sourceResult) {
    if (statusName === 'success' && payloadSource === undefined) {
      error = 'Empty payload';
      statusName = 'error';
    }

    // flag data in progress (all actions is async)
    var isFetching = statusName === 'pending';

    // error message text
    var errorText = !isFetching && error ? error : !isFetching && payloadSource === undefined ? 'Empty data' : error ? error : '';

    // flag
    var hasError = Boolean(errorText);

    // id key, ids or id dispatch({...action.data.id}) or  dispatch({...action.data.ids})
    var actionDataKey = !isFetching && !hasError ? Array.isArray(payloadSource) ? _config.ACTION_IDS_KEY : _config.ACTION_ID_KEY : undefined;

    // action flag response data is array or not
    var isArrayData = actionDataKey === _config.ACTION_IDS_KEY;

    // action property entity (actionSchema id attribute) name
    var entityName = actionSchema.key;

    // list of ids or id from payload
    var payload = !isFetching && !hasError && payloadSource ? isArrayData ? payloadSource.map(function (item) {
      return Action.getEntityId(item);
    }) : Action.getEntityId(payloadSource) : undefined;

    /**
     *
     * @type {{
     * type: String,
     * prefix: ACTION_TYPE_PREFIX,
     * actionId: String,
     * parentActionId: String,
     * status: String,
     * time: Number,
     * isArrayData: Boolean,
     * actionDataKey: ACTION_ID_KEY|ACTION_IDS_KEY,
     * entityName: String,
     * isFetching: Boolean,
     * errorText: String,
     * hasError: Boolean,
     * actionSchema: Object,
     * payload: Number|Array,
     * payloadSource: Object|Array
     * }}
     */
    return Object.freeze({
      type: '' + actionId,
      prefix: _config.ACTION_TYPE_PREFIX,
      actionId: actionId,
      parentActionId: parentActionId,

      status: statusName,
      time: new Date().getTime(),
      isArrayData: isArrayData,
      actionDataKey: actionDataKey,
      entityName: entityName,
      isFetching: isFetching,
      errorText: errorText,
      hasError: hasError,
      actionSchema: actionSchema,
      sourceResult: sourceResult,
      payload: payload,
      payloadSource: payloadSource
    });
  };
};

/**
 * Create new action
 *
 * @memberOf action
 * @param {String} actionId - uniquie action id
 * @param {String} [parentActionId=""] - parent action id
 * @param {Object} actionSchema - normalizr actionSchema
 * @param {Function|Promise} actionMethod - action function func/promise/ajax call/ etc
 * @param {String|Function|Promise} queryBuilder - action query function builder
 * returns String (for example url),
 * or array [url:String, queryParams:Object (url params), queryBody:Object (post body params)]
 * @param {Function} [responseMapper=_defaultResponseMapper] - actionMethod response (only success) mapper
 * @returns {Action} - Action wrapper Function
 * @private
 */
var _makeAction = function _makeAction(actionId, parentActionId, actionSchema, actionMethod, queryBuilder, responseMapper) {
  var _makeWithId = function _makeWithId(newActionId) {
    newActionId = newActionId.toString().trim();

    if (!newActionId) {
      throw new Error('Action id must be not empty');
    }

    var parentActionId = Action.actionId();
    var nextActionId = [parentActionId, '' + newActionId].join(' ');

    return _makeAction(nextActionId, parentActionId, actionSchema, actionMethod, queryBuilder, responseMapper);
  };

  /**
   * Private create action function
   *
   * @memberOf action._makeAction
   *
   * @returns {Function}
   * @constructor
   */
  function Action() {
    var _this = this;

    var args = Array.prototype.slice.call(arguments);
    var actionResponseMapper = responseMapper || (0, _helper.getDefaultResponseMapper)();

    var _STATUSES$map = _config.STATUSES.map(function (statusName) {
      return _makeActionHandler(Action, actionId, parentActionId, statusName, actionSchema);
    }),
        _STATUSES$map2 = _slicedToArray(_STATUSES$map, 3),
        pending = _STATUSES$map2[0],
        success = _STATUSES$map2[1],
        error = _STATUSES$map2[2];

    var actionResultCallback = function actionResultCallback(dispatch, getState, err, result) {
      try {
        var errorMessage = (0, _helper.parseError)(err);
        var parsedResponse = errorMessage ? undefined : actionResponseMapper(result);

        errorMessage ? dispatch(error(errorMessage, undefined)) : dispatch(success(undefined, parsedResponse, result));
      } catch (e) {
        dispatch(error(String('' + (e.message || e)), undefined));
        throw e;
      }
    };

    var _makeQueryBuilder = function _makeQueryBuilder(level, dispatch, getState, args, method) {
      var typeOfMethod = typeof method === 'undefined' ? 'undefined' : _typeof(method);

      if (typeOfMethod === 'string' || typeOfMethod === 'number' || typeOfMethod === 'object' || typeOfMethod === 'boolean') {
        return method;
      }

      if (method instanceof Promise) {
        return method.apply(_this, level === 0 ? args : [dispatch, getState]).then(function (resp) {
          _makeQueryBuilder(level + 1, dispatch, getState, args, resp);
        }).catch(function (err) {
          throw err;
        });
      }

      if (typeOfMethod === 'function') {
        var result = method.apply(_this, level === 0 ? args : [dispatch, getState]);
        return _makeQueryBuilder(level + 1, dispatch, getState, args, result);
      }
    };

    var _callActionMethod = function _callActionMethod(actionMethod, args, dispatch, getState) {
      args = Array.isArray(args) ? args : [args];

      var actionResult = actionMethod.apply(_this, args);

      if (actionResult instanceof Promise) {
        return actionResult.then(function (resp) {
          return actionResultCallback(dispatch, getState, false, resp);
        }).catch(function (err) {
          return actionResultCallback(dispatch, getState, err, undefined);
        });
      }

      if (typeof actionResult === 'function') {
        actionResult = actionResult.call(_this, dispatch, getState);

        if (!actionResult) {
          return actionResultCallback(dispatch, getState, undefined, undefined);
        }

        if (actionResult instanceof Promise) {
          return actionResult.then(function (resp) {
            return actionResultCallback(dispatch, getState, false, resp);
          }).catch(function (err) {
            return actionResultCallback(dispatch, getState, err, undefined);
          });
        }
      }

      return actionResultCallback(dispatch, getState, false, actionResult);
    };

    // action body
    return function (dispatch, getState) {
      dispatch(pending());

      try {
        var compiledActionArgs = queryBuilder ? _makeQueryBuilder(0, dispatch, getState, args, queryBuilder) : args;

        if (compiledActionArgs instanceof Promise) {
          return compiledActionArgs.then(function (resp) {
            return _callActionMethod(actionMethod, resp, dispatch, getState);
          }).catch(function (err) {
            throw err;
          });
        }

        _callActionMethod(actionMethod, compiledActionArgs, dispatch, getState);
      } catch (e) {
        actionResultCallback(dispatch, getState, e, undefined);
      }
    };
  }

  /**
   * @memberOf action._makeAction.Action
   * @type {Function}
   * @returns {Function} - returns action id
   */
  Action.type = Action.actionId = Action.toString = Action.valueOf = function () {
    return actionId;
  };

  /**
   * @memberOf action._makeAction.Action
   * @param {Object} item - source entity data
   *
   * @type {Function}
   * @returns {Function} - returns id from source
   */
  Action.getEntityId = function (item) {
    return actionSchema.getId(item);
  };

  /**
   * @memberOf action._makeAction.Action
   * @type {Function}
   * @returns {Object} - returns actionSchema of action
   */
  Action.getSchema = function () {
    return actionSchema;
  };

  /**
   * @memberOf action._makeAction.Action
   * @type {Function}
   * @returns {Function} - returns entity uniq name (id)
   */
  Action.getEntityName = function () {
    return actionSchema.key;
  };

  /**
   * @memberOf action._makeAction.Action
   * @type {Function}
   * @returns {Action} - returns some action with new uniq id
   */
  Action.clone = function () {
    return createAction(actionSchema, actionMethod, queryBuilder, responseMapper);
  };

  /**
   * @memberOf action._makeAction.Action
   * @type {Function}
   * @returns {Action} - returns some action with prefix-id
   */
  Action.withPrefix = function () {
    for (var _len = arguments.length, prefix = Array(_len), _key = 0; _key < _len; _key++) {
      prefix[_key] = arguments[_key];
    }

    return _makeWithId(prefix.join('-'));
  };

  /**
   * @memberOf action._makeAction.Action
   * @type {Function}
   * @returns {Action} - returns some action with name-id (see prefix)
   */
  Action.withName = function (name) {
    return _makeWithId(name);
  };

  /**
   * Clear action store data
   *
   * @memberOf action._makeAction.Action
   * @type {Function}
   *
   * @example
   * store.dispatch(userLoginAction.empty())
   *
   * @returns {Undefined} - returns None, only clear action data
   */
  Action.empty = function () {
    return function (dispatch, getState) {
      dispatch({
        time: new Date().getTime(),
        type: _config.ACTION_EMPTY_TYPE_NAME,
        prefix: _config.ACTION_TYPE_PREFIX,
        actionId: Action.actionId()
      });
    };
  };

  return Action;
};

/**
 * Action creator
 *
 * @memberOf action
 * @function
 *
 * @param {String|Object} actionSchema - normalizr actionSchema item
 * @param {Function|Promise} actionMethod
 * @param {String|Function} [queryBuilder=undefined]
 * @param {Function} [responseMapper=_defaultResponseMapper||callback from setDefaultResponseMapper]
 *
 *
 * @example
 * // CREATE ACTION
 * const get = (url) => {// returns Promise ajax call}
 *
 * const getUserAction = createAction(user, get, 'user')
 * // calling url 'user'
 *
 * const getUserAction = createAction(user, () => {
 *  return new Promise((resolve, reject) => {
 *    // cookie|local storage|other get data
 *    resolve({
 *      //data
 *    })
 *  })
 * })
 *
 * const getUserAction = createAction(user, get, (userId) => `user/${userId}`)
 * // calling url 'user/${userId}'
 *
 * const getUserAction = createAction(user, get, (userId) => [
 *  `user/${userId}`,
 *  undefined,
 *  {name, phone, email}
 * ])
 * // calling url 'user/${userId}' and post data (if you are using axios) {name, phone, email}
 *
 * // you can pass multi level functions or promises (args) => (dispatch, getState) => (dispatch, getState) => (dispatch, getState) => ...
 * const getUserAction = createAction(user, get, (userId) => {
 *  return (dispatch, getState)=>{
 *    return new Promise((resolve) => {resolve(`user/${userId}`)})
 *  }
 * })
 * // calling url 'user/${userId}'
 *
 * const getUserAction = createAction(user, get, 'user', (resp) => {resp.data})
 * // calling url 'user' but replace backend success response to resp.data
 *
 * @returns {Action} - Action handler function
 */
var createAction = exports.createAction = function createAction(actionSchema, actionMethod, queryBuilder, responseMapper) {
  if (!actionSchema) {
    throw 'actionSchema argument is required, must be normalizr actionSchema';
  }
  if (!actionMethod) {
    throw 'actionMethod argument is required, must be promise or function';
  }
  if (responseMapper && typeof responseMapper !== 'function') {
    throw 'responseMapper must be function';
  }

  var actionId = _makeActionUniqId(actionSchema.key);

  return _makeAction(actionId, '', actionSchema, actionMethod, queryBuilder, responseMapper);
};

if (_config.IS_TEST_ENVIRONMENT) {
  module.exports._makeActionUniqId = _makeActionUniqId;
  module.exports._makeActionHandler = _makeActionHandler;
  module.exports._makeAction = _makeAction;
}