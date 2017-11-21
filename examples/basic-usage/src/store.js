/**
 * @namespace store
 */

import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {denormalize} from 'normalizr';
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {createReducers, setDefaultResponseMapper, setDenormalize} from 'redux-tide';
import DevTools from './DevTools'
import {OPEN_EDIT} from './Posts/types';
import {appSchema} from './schema'
import {postsMiddleware} from './Posts/middleware'

setDefaultResponseMapper((resp) => {
  return resp.data
})

setDenormalize(denormalize)

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history),
  postsMiddleware
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  } else {
    enhancers.push(DevTools.instrument())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)


const defaultUIState = {
  editablePost: ''
}


const UIReducer = (state = defaultUIState, action) => {

  switch (action.type) {
    case OPEN_EDIT:
      return {...state, ...{editablePost: action.postId}}
  }
  return state
}

export default createStore(
  combineReducers({
    ui: UIReducer,
    ...createReducers(...appSchema)
  }),
  initialState,
  composedEnhancers
)