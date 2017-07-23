import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import reducers from '../reducers'

import promiseMiddleware from '../../src/promise-middleware'
import routingMiddleware from '../../src/routing-middleware'

export const configureStore = (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(
      thunk,
      promiseMiddleware(),
      routingMiddleware
    )
  )
)
