import {createAction} from './action'
import {createReducers} from './reducer'
import {getActionData} from './selector'

import {ACTION_ID_KEY, ACTION_IDS_KEY, ACTION_TYPE_PREFIX, ACTIONS_REDUCER_NAME, ENTITIES_REDUCER_NAME, setDenormalize, setDefaultResponseMapper} from './config'

export {
  ACTION_ID_KEY,
  ACTION_IDS_KEY,
  ACTION_TYPE_PREFIX,
  ACTIONS_REDUCER_NAME,
  ENTITIES_REDUCER_NAME,
  setDenormalize,
  setDefaultResponseMapper,
  createAction,
  createReducers,
  getActionData
}
