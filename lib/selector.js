'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.denomalizeEntityItemById = exports.getEntityItemsByEntityName = exports.getEntityItemsByAction = exports.getEntityItemsBySchema = exports.getEntityReducer = exports.getActionsReducer = exports.getMergedActionsData = exports.getActionData = undefined;

var _reselect = require('reselect');

var _helper = require('./helper');

var _config = require('./config');

var defaultActionDataOutput = {
  status: '',
  time: '',
  hasError: '',
  errorText: '',
  isFetching: false
}; /**
    * @namespace selector
    */

var _makeGetActionData = function _makeGetActionData(action, actionId, entityName, actionEntitySchema) {
  return (0, _reselect.createSelector)([function (state) {
    return state[_config.ACTIONS_REDUCER_NAME].get(actionId);
  }, function (state) {
    return state[_config.ENTITIES_REDUCER_NAME].get(entityName);
  }, function (state) {
    return state[_config.ENTITIES_REDUCER_NAME];
  }], function (actionState, entityState, entities) {
    var output = Object.assign({}, defaultActionDataOutput);

    if (!actionState) {
      return output;
    }

    output = Object.assign(output, {
      actionId: actionId,
      sourceResult: actionState.get('sourceResult'),
      status: actionState.get('status'),
      time: actionState.get('time'),
      hasError: actionState.get('hasError'),
      errorText: actionState.get('errorText'),
      isFetching: actionState.get('isFetching')
    });

    var actionPayloadIsArray = actionState.get('isArrayData');
    var actionDataKey = actionState.get('actionDataKey');

    var actionPayloadIds = !actionDataKey ? undefined : actionPayloadIsArray ? actionState.get(actionDataKey) : [actionState.get(actionDataKey)];
    var actionPrevPayloadIds = !actionDataKey ? undefined : actionPayloadIsArray ? actionState.get('prev' + actionDataKey) : [actionState.get('prev' + actionDataKey)];

    if (actionDataKey) {
      output = Object.assign(output, {
        payload: actionPayloadIsArray ? [] : '',
        prevPayload: actionPayloadIsArray ? [] : ''
      });
    }

    if (actionDataKey && entityState && (actionPrevPayloadIds || actionPayloadIds)) {
      var prevData = !actionPrevPayloadIds ? [] : (0, _helper.denormalize)(actionPrevPayloadIds, [actionEntitySchema], entities);
      var currentData = !actionPayloadIds ? [] : (0, _helper.denormalize)(actionPayloadIds, [actionEntitySchema], entities);

      prevData = prevData.filter(function (v) {
        return v;
      }); // todo remove undefined values
      currentData = currentData.filter(function (v) {
        return v;
      }); // todo remove undefined values

      prevData = prevData.map(function (item) {
        return item.toJS();
      });
      currentData = currentData.map(function (item) {
        return item.toJS();
      });

      output = Object.assign(output, {
        payload: actionPayloadIsArray ? currentData : currentData[0],
        prevPayload: actionPayloadIsArray ? prevData : prevData[0]
      });
    }

    return output;
  });
};

var getActionData = exports.getActionData = function getActionData(action) {
  var actionId = action.actionId();
  var entityName = action.getEntityName();
  var actionEntitySchema = action.getSchema();

  return function (state, props) {
    var selectorGetActionData = _makeGetActionData(action, actionId, entityName, actionEntitySchema);
    return selectorGetActionData(state, props);
  };
};

var getMergedActionsData = exports.getMergedActionsData = function getMergedActionsData() {
  for (var _len = arguments.length, actions = Array(_len), _key = 0; _key < _len; _key++) {
    actions[_key] = arguments[_key];
  }

  return (0, _reselect.createSelector)(actions.map(function (action) {
    return getActionData(action);
  }), function () {
    for (var _len2 = arguments.length, actionsData = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      actionsData[_key2] = arguments[_key2];
    }

    var sortedByUpate = actionsData.sort(function (a, b) {
      return a.time - b.time;
    });

    return sortedByUpate.reduce(function (memo, item) {
      return Object.assign(memo, item);
    });
  });
};

var getActionsReducer = exports.getActionsReducer = function getActionsReducer(state) {
  return state[_config.ACTIONS_REDUCER_NAME];
};

var getEntityReducer = exports.getEntityReducer = function getEntityReducer(state) {
  return state[_config.ENTITIES_REDUCER_NAME];
};

var getEntityItemsBySchema = exports.getEntityItemsBySchema = function getEntityItemsBySchema(entitySchema) {
  return (0, _reselect.createSelector)([getEntityReducer], function (entities) {
    return entities.get(entitySchema.key);
  });
};

var getEntityItemsByAction = exports.getEntityItemsByAction = function getEntityItemsByAction(action) {
  return (0, _reselect.createSelector)([getEntityReducer], function (entities) {
    return entities.get(action.getEntityName());
  });
};

var getEntityItemsByEntityName = exports.getEntityItemsByEntityName = function getEntityItemsByEntityName(name) {
  return (0, _reselect.createSelector)([getEntityReducer], function (entities) {
    return entities.get(name);
  });
};

var denomalizeEntityItemById = exports.denomalizeEntityItemById = function denomalizeEntityItemById(id, schema, entities) {
  return (0, _helper.denormalize)(id, schema, entities);
};

if (_config.IS_TEST_ENVIRONMENT) {
  module.exports.defaultActionDataOutput = defaultActionDataOutput;
  module.exports._makeGetActionData = _makeGetActionData;
}