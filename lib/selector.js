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

var deepCopy = function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
};

var makeDefaultActionData = function makeDefaultActionData() {
  return deepCopy(defaultActionDataOutput);
};

var getPayloadIds = function getPayloadIds(dataKey, isArray, actionState, stateKey) {
  if (!dataKey) {
    return undefined;
  }

  var payloadIds = actionState.get(stateKey || dataKey);

  if (!payloadIds) {
    return undefined;
  }

  return isArray ? payloadIds : [payloadIds];
};

var makeActionDenormalizedPayload = function makeActionDenormalizedPayload(isArray, payloadIds, schema, entities) {
  // return empty immutable object
  if (!payloadIds) {
    return undefined;
  }

  var result = (0, _helper.denormalize)(payloadIds, [schema], entities).filter(function (v) {
    return v;
  });

  return isArray ? result : result[0];
};

var makeActionDenormalizedPayloads = function makeActionDenormalizedPayloads(isFetching, actionSchema, entities, payloadIsArray, actionDataKey, entityState, actionState) {
  if (!actionDataKey) {
    return undefined;
  }

  if (!entityState) {
    return {
      payload: payloadIsArray ? [] : undefined,
      prevPayload: payloadIsArray ? [] : undefined
    };
  }

  var actionPayloadIds = getPayloadIds(actionDataKey, payloadIsArray, actionState);
  var actionPrevPayloadIds = getPayloadIds(actionDataKey, payloadIsArray, actionState, 'prev' + actionDataKey);

  return {
    payload: makeActionDenormalizedPayload(payloadIsArray, actionPayloadIds, actionSchema, entities),
    prevPayload: makeActionDenormalizedPayload(payloadIsArray, actionPrevPayloadIds, actionSchema, entities)
  };
};

var _makeGetActionData = function _makeGetActionData(action, actionId, entityName, actionSchema) {
  return (0, _reselect.createSelector)([function (state) {
    return state[_config.ACTIONS_REDUCER_NAME].get(actionId);
  }, function (state) {
    return state[_config.ENTITIES_REDUCER_NAME].get(entityName);
  }, function (state) {
    return state[_config.ENTITIES_REDUCER_NAME];
  }], function (actionState, entityState, entities) {
    if (!actionState) {
      return makeDefaultActionData();
    }

    var payloadIsArray = actionState.get('isArrayData');
    var dataKey = actionState.get('actionDataKey');
    var isFetching = actionState.get('status') === 'pending';

    return Object.assign(makeDefaultActionData(), {
      actionId: actionId,
      sourceResult: actionState.get('sourceResult'),
      status: actionState.get('status'),
      time: actionState.get('time'),
      hasError: actionState.get('hasError'),
      errorText: actionState.get('errorText'),
      isFetching: actionState.get('isFetching')
    }, makeActionDenormalizedPayloads(isFetching, actionSchema, entities, payloadIsArray, dataKey, entityState, actionState));
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
      return Object.assign(memo, item, {
        payload: memo.payload ? memo.payload.merge(item.payload) : item.payload,
        prevPayload: memo.prevPayload ? memo.prevPayload.merge(item.prevPayload) : item.prevPayload
      });
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