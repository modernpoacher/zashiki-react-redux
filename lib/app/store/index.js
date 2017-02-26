import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'

import reducers from '../reducers'

import {
  routeMasterMiddleware
} from '../../src/route-master-middleware'

import {
  promiseMiddleware
} from '../../src/promise-middleware'

export const configureStore = (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(
      routeMasterMiddleware,
      promiseMiddleware
    )
  )
)
