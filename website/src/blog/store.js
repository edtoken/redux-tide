import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {denormalize} from 'normalizr';
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {createReducers, setDefaultResponseMapper, setDenormalize} from '../../../src/index';
import DevTools from '../DevTools'

import {appSchema} from './schema'

setDefaultResponseMapper((resp) => {
  return resp.data
})

setDenormalize(denormalize)

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

enhancers.push(DevTools.instrument())

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const customDefaultState = {}

const customReducer = (state = customDefaultState, action) => {
  return state
}

export default createStore(
  combineReducers({
    custom: customReducer,
    ...createReducers(...appSchema)
  }),
  initialState,
  composedEnhancers
)