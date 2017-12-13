'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntityItemsByEntityName = exports.getEntityItemsByAction = exports.getEntityItemsByScheme = exports.getEntityReducer = exports.getActionData = exports.createReducers = exports.createAction = exports.setDefaultResponseMapper = exports.setDenormalize = exports.denomalizeEntityItemById = exports.ENTITIES_REDUCER_NAME = exports.ACTIONS_REDUCER_NAME = exports.ACTION_TYPE_PREFIX = exports.ACTION_IDS_KEY = exports.ACTION_ID_KEY = undefined;

var _action = require('./action');

var _reducer = require('./reducer');

var _selector = require('./selector');

var _config = require('./config');

exports.ACTION_ID_KEY = _config.ACTION_ID_KEY;
exports.ACTION_IDS_KEY = _config.ACTION_IDS_KEY;
exports.ACTION_TYPE_PREFIX = _config.ACTION_TYPE_PREFIX;
exports.ACTIONS_REDUCER_NAME = _config.ACTIONS_REDUCER_NAME;
exports.ENTITIES_REDUCER_NAME = _config.ENTITIES_REDUCER_NAME;
exports.denomalizeEntityItemById = _selector.denomalizeEntityItemById;
exports.setDenormalize = _config.setDenormalize;
exports.setDefaultResponseMapper = _config.setDefaultResponseMapper;
exports.createAction = _action.createAction;
exports.createReducers = _reducer.createReducers;
exports.getActionData = _selector.getActionData;
exports.getEntityReducer = _selector.getEntityReducer;
exports.getEntityItemsByScheme = _selector.getEntityItemsByScheme;
exports.getEntityItemsByAction = _selector.getEntityItemsByAction;
exports.getEntityItemsByEntityName = _selector.getEntityItemsByEntityName;