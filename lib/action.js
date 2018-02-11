'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAction = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @namespace action
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _config = require('./config');

var _helper = require('./helper');

/**
 * Created uniq prefix for action type
 *
 * @memberOf action
 * @private
 * @param {String} name - actionSchema key
 * @returns {String} - `${name} ${uniqPrefix}` name with uniq prefix
 * @private
 */
var makeActionUniqId = function makeActionUniqId(name) {
  return _config.ACTION_TYPE_PREFIX + ' ' + name + ' ' + _helper.uniqPrefix;
};

var getHandlerErrorText = function getHandlerErrorText(isFetching, error, payloadSource) {
  if (!isFetching && error) {
    return error;
  }
  if (!isFetching && payloadSource === undefined) {
    return 'Empty Data';
  }
  return error || '';
};

var getHandlerActionDataKey = function getHandlerActionDataKey(isFetching, hasError, payloadSource) {
  if (!isFetching && !hasError) {
    return Array.isArray(payloadSource) ? _config.ACTION_IDS_KEY : _config.ACTION_ID_KEY;
  }
  return undefined;
};

var getHandlerPayload = function getHandlerPayload(Action, isFetching, hasError, isArrayData, payloadSource) {
  if (payloadSource && !isFetching && !hasError) {
    return isArrayData ? payloadSource.map(function (item) {
      return Action.getEntityId(item);
    }) : Action.getEntityId(payloadSource);
  }
  return undefined;
};
/**
 * Make action handler wrapper
 *
 * @memberOf action
 * @param {Function} Action - Action func
 * @param {String} actionId - uniq action id and type
 * @param {String} parentActionId - uniq parent action id and type (when action created with clone/withname/prefix)
 * @param {String} status - name of action status pending/success/error
 * @param {Object} actionSchema - normalizr actionSchema
 * @returns {Function} - action handler wrapper
 * @private
 */
var makeActionHandler = function makeActionHandler(Action, actionId, parentActionId, status, actionSchema) {
  /**
   * Action handler
   *
   * @param {String} error - action error text
   * @param {Object|Array} payloadSource - response from action result
   * @param {Object|Array} args - arguments from queryBuilder
   * @returns {Object} - action dispatch body
   */
  return function (error, payloadSource, sourceResult, args) {
    if (status === 'success' && payloadSource === undefined) {
      error = 'Empty payload';
      status = 'error';
    }

    // flag data in progress (all actions is async)
    var isFetching = status === 'pending';

    // error message text
    var errorText = getHandlerErrorText(isFetching, error, payloadSource);

    // flag
    var hasError = Boolean(errorText);

    // id key, ids or id dispatch({...action.data.id}) or dispatch({...action.data.ids})
    var actionDataKey = getHandlerActionDataKey(isFetching, hasError, payloadSource);

    // action flag response data is array or not
    var isArrayData = actionDataKey === _config.ACTION_IDS_KEY;

    // action property entity (actionSchema id attribute) name
    var entityName = actionSchema.key;

    // list of ids or id from payload
    var payload = getHandlerPayload(Action, isFetching, hasError, isArrayData, payloadSource);

    /**
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
    return {
      time: new Date().getTime(),
      type: '' + actionId,
      prefix: _config.ACTION_TYPE_PREFIX,
      args: args,
      actionId: actionId,
      parentActionId: parentActionId,
      status: status,
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
    };
  };
};

var makeResultCallback = function makeResultCallback(responseMapper, success, error) {
  return function (dispatch, getState, err, result, args) {
    try {
      var errorMessage = (0, _helper.parseError)(err);

      if (errorMessage) {
        return dispatch(error(errorMessage, undefined, undefined, args));
      }

      dispatch(success(undefined, responseMapper(result), result, args));
    } catch (e) {
      dispatch(error(String('' + (e.message || e)), undefined, undefined, args));
      throw e;
    }
  };
};

var makeQueryBuilder = function makeQueryBuilder(level, dispatch, getState, args, method) {
  var nextLevel = level + 1;
  var nullLevelArgs = level === 0 ? args : [dispatch, getState];

  if (method instanceof Promise) {
    return method.apply(undefined, nullLevelArgs).then(function (resp) {
      makeQueryBuilder(nextLevel, dispatch, getState, args, resp);
    }).catch(function (err) {
      throw err;
    });
  }

  if (typeof method === 'function') {
    var result = method.apply(undefined, nullLevelArgs);
    return makeQueryBuilder(nextLevel, dispatch, getState, args, result);
  }

  return method;
};

var makeCallActionMethod = function makeCallActionMethod(resultCallBack) {
  return function (actionMethod, args, dispatch, getState) {
    args = Array.isArray(args) ? args : [args];

    var actionResult = actionMethod.apply(undefined, args);

    if (actionResult instanceof Promise) {
      return actionResult.then(function (resp) {
        return resultCallBack(dispatch, getState, false, resp, args);
      }).catch(function (err) {
        return resultCallBack(dispatch, getState, err, undefined, args);
      });
    }

    if (typeof actionResult === 'function') {
      actionResult = actionResult.call(undefined, dispatch, getState);

      if (!actionResult) {
        return resultCallBack(dispatch, getState, undefined, undefined, args);
      }

      if (actionResult instanceof Promise) {
        return actionResult.then(function (resp) {
          return resultCallBack(dispatch, getState, false, resp, args);
        }).catch(function (err) {
          return resultCallBack(dispatch, getState, err, undefined, args);
        });
      }
    }

    return resultCallBack(dispatch, getState, false, actionResult, args);
  };
};

var actionCopyWrapper = function actionCopyWrapper(Action, actionSchema, actionMethod, queryBuilder, responseMapper) {
  return function (newActionId) {
    newActionId = newActionId.toString().trim();

    if (!newActionId) {
      throw new Error('Action id must be not empty');
    }

    var parentActionId = Action.actionId();
    var nextActionId = [parentActionId, '' + newActionId].join(' ');

    return makeAction.apply({}, [nextActionId, parentActionId, actionSchema, actionMethod, queryBuilder, responseMapper]);
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
var makeAction = function makeAction(actionId, parentActionId, actionSchema, actionMethod, queryBuilder, responseMapper) {
  var _this = this;

  /**
   * Private create action function
   *
   * @memberOf action.makeAction
   *
   * @returns {Function}
   * @constructor
   */
  this.actionId = actionId;
  this.parentActionId = parentActionId;
  this.schema = actionSchema;
  this.method = actionMethod;
  this.queryBuilder = queryBuilder;
  this.responseMapper = responseMapper;

  this.action = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this.responseMapper = responseMapper || (0, _helper.getDefaultResponseMapper)();

    var _STATUSES$map = _config.STATUSES.map(function (statusName) {
      return makeActionHandler(_this.action, actionId, parentActionId, statusName, actionSchema);
    }),
        _STATUSES$map2 = _slicedToArray(_STATUSES$map, 3),
        pending = _STATUSES$map2[0],
        success = _STATUSES$map2[1],
        error = _STATUSES$map2[2];

    var resultCallBack = makeResultCallback(_this.responseMapper, success, error);
    var callActionMethod = makeCallActionMethod(resultCallBack);

    // action body
    return function (dispatch, getState) {
      dispatch(pending());

      try {
        var compiledActionArgs = queryBuilder ? makeQueryBuilder(0, dispatch, getState, args, queryBuilder) : args;

        if (compiledActionArgs instanceof Promise) {
          return compiledActionArgs.then(function (resp) {
            return callActionMethod(actionMethod, resp, dispatch, getState);
          }).catch(function (err) {
            throw err;
          });
        }

        callActionMethod(actionMethod, compiledActionArgs, dispatch, getState);
      } catch (e) {
        resultCallBack(dispatch, getState, e, undefined);
      }
    };
  };

  /**
   * @memberOf action.makeAction.Action
   * @type {Function}
   * @returns {Function} - returns action id
   */
  this.action.type = this.action.actionId = this.action.toString = this.action.valueOf = function () {
    return _this.actionId;
  };

  /**
   * @memberOf action.makeAction.Action
   * @param {Object} item - source entity data
   *
   * @type {Function}
   * @returns {Function} - returns id from source
   */
  this.action.getEntityId = function (item) {
    return _this.schema.getId(item);
  };

  /**
   * @memberOf action.makeAction.Action
   * @type {Function}
   * @returns {Object} - returns actionSchema of action
   */
  this.action.getSchema = function () {
    return _this.schema;
  };

  /**
   * @memberOf action.makeAction.Action
   * @type {Function}
   * @returns {Function} - returns entity uniq name (id)
   */
  this.action.getEntityName = function () {
    return _this.schema.key;
  };

  /**
   * @memberOf action.makeAction.Action
   * @type {Function}
   * @returns {Action} - returns some action with new uniq id
   */
  this.action.clone = function () {
    return createAction(_this.schema, _this.method, _this.queryBuilder, _this.responseMapper);
  };

  /**
   * @memberOf action.makeAction.Action
   * @type {Function}
   * @returns {Action} - returns some action with prefix-id
   */
  this.action.withPrefix = function () {
    for (var _len2 = arguments.length, prefix = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      prefix[_key2] = arguments[_key2];
    }

    return actionCopyWrapper(_this.action, _this.schema, _this.method, _this.queryBuilder, _this.responseMapper)(prefix.join('-'));
  };

  /**
   * @memberOf action.makeAction.Action
   * @type {Function}
   * @returns {Action} - returns some action with name-id (see prefix)
   */
  this.action.withName = function (name) {
    return actionCopyWrapper(_this.action, _this.schema, _this.method, _this.queryBuilder, _this.responseMapper)(name);
  };

  /**
   * Clear action store data
   *
   * @memberOf action.makeAction.Action
   * @type {Function}
   *
   * @example
   * store.dispatch(userLoginAction.empty())
   *
   * @returns {Undefined} - returns None, only clear action data
   */
  this.action.reset = function () {
    return function (dispatch, getState) {
      dispatch({
        time: new Date().getTime(),
        type: _config.ACTION_EMPTY_TYPE_NAME,
        prefix: _config.ACTION_TYPE_PREFIX,
        actionId: _this.actionId,
        actionSchema: _this.schema
      });
    };
  };

  /**
   * Remove action entity id or ids from entities reducer
   *
   * @memberOf action.makeAction.Action
   * @type {Function}
   *
   * @example
   * store.dispatch(userLoginAction.remove())
   *
   * @returns {Undefined} - returns None, only remove entity items
   */
  this.action.remove = function () {
    return function (dispatch, getState) {
      dispatch({
        time: new Date().getTime(),
        type: _config.ACTION_REMOVE_TYPE_NAME,
        prefix: _config.ACTION_TYPE_PREFIX,
        actionId: _this.actionId,
        actionSchema: _this.schema
      });
    };
  };

  return this.action;
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

  var actionId = makeActionUniqId(actionSchema.key);

  return makeAction.apply({}, [actionId, '', actionSchema, actionMethod, queryBuilder, responseMapper]);
};

if (_config.IS_TEST_ENVIRONMENT) {
  module.exports.makeActionUniqId = makeActionUniqId;
  module.exports.makeActionHandler = makeActionHandler;
  module.exports.makeAction = makeAction;
}