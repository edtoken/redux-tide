'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReducers = undefined;

var _immutable = require('immutable');

var _normalizr = require('normalizr');

var _config = require('./config');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @namespace reducer
                                                                                                                                                                                                                   */

var defaultEmptyActionData = {
  'array': [],
  'notArray': ''

  /**
   * This function returns object with actions reducer and entities reducer
   *
   * @memberOf reducer
   * @function
   *
   * @example
   * import { schema } from 'normalizr'
   * import { createReducers } from 'redux-tide'
   *
   * const userSchema = new schema.Entity('user', {})
   * const commentSchema = new schema.Entity('comment', { user:userSchema }, { idAttribute: 'comment_id' })
   *
   * const rootReducer = {
   *  ...createReducers(userSchema, commentSchema)
   * }
   * const store = createStore(
   *  combineReducers(rootReducer),
   *  initialState,
   *  compose(...enhancers)
   * )
   *
   * @param {Arguments} appSchema
   * @returns {Object} - {[ACTIONS_REDUCER_NAME]:Function, [ENTITIES_REDUCER_NAME]:Function}
   */
};var createReducers = exports.createReducers = function createReducers() {
  var _ref;

  for (var _len = arguments.length, appSchema = Array(_len), _key = 0; _key < _len; _key++) {
    appSchema[_key] = arguments[_key];
  }

  // default state for actions
  var defaultActionsState = (0, _immutable.fromJS)({});

  // default state for entities
  var defaultEntitiesState = (0, _immutable.fromJS)(appSchema.reduce(function (memo, item) {
    memo[item.key] = {};
    return memo;
  }, {}));

  return _ref = {}, _defineProperty(_ref, _config.ACTIONS_REDUCER_NAME, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultActionsState;
    var action = arguments[1];

    if (!action.prefix || action.prefix !== _config.ACTION_TYPE_PREFIX) {
      return state;
    }

    var status = action.status,
        time = action.time,
        actionId = action.actionId,
        error = action.error,
        payload = action.payload,
        sourceResult = action.sourceResult,
        isFetching = action.isFetching,
        errorText = action.errorText,
        hasError = action.hasError,
        isArrayData = action.isArrayData,
        actionDataKey = action.actionDataKey;


    var emptyData = actionDataKey ? defaultEmptyActionData[isArrayData ? 'array' : 'notArray'] : undefined;

    var actionState = state.get(actionId);

    // when action state is not defined need set new value
    if (!actionState) {
      state = state.set(actionId, (0, _immutable.fromJS)({
        status: '',
        time: '',
        errorText: ''
      }));
      actionState = state.get(actionId);
    }

    actionState = actionState.merge({
      status: status,
      time: time,
      error: error,
      hasError: hasError,
      errorText: errorText,
      isFetching: isFetching,
      isArrayData: isArrayData,
      actionDataKey: actionDataKey
    });

    if (actionDataKey) {
      actionState = actionState.set('prev' + actionDataKey, actionState.get(actionDataKey, emptyData));
    }

    if (sourceResult) {
      actionState = actionState.set('sourceResult', sourceResult);
    }

    if (!hasError && actionDataKey && payload) {
      actionState = actionState.set(actionDataKey, payload, {});
    }

    return state.set(actionId, actionState);
  }), _defineProperty(_ref, _config.ENTITIES_REDUCER_NAME, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEntitiesState;
    var action = arguments[1];


    if (!action.prefix || action.prefix !== _config.ACTION_TYPE_PREFIX) {
      return state;
    }

    var isFetching = action.isFetching,
        hasError = action.hasError,
        isArrayData = action.isArrayData,
        payloadSource = action.payloadSource,
        actionSchema = action.actionSchema;


    var normalizedPayloadSource = payloadSource && !hasError && !isFetching ? (0, _normalizr.normalize)(isArrayData ? payloadSource : [payloadSource], [actionSchema]) : undefined;

    var newEntitiesItems = normalizedPayloadSource ? normalizedPayloadSource.entities : {};

    // merge entity item data
    for (var entityName in newEntitiesItems) {
      for (var entityId in newEntitiesItems[entityName]) {
        var prevEntityState = state.getIn([entityName, entityId]);
        var nextEntityState = (0, _immutable.fromJS)(newEntitiesItems[entityName][entityId]);

        if (!prevEntityState) {
          state = state.setIn([entityName, entityId], nextEntityState);
          continue;
        }

        state = state.mergeIn([entityName, entityId], nextEntityState);
      }
    }

    // todo add isFetching attribute in entity item

    return state;
  }), _ref;
};