import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'
import reducers from '../reducers'

import {
  zashikiMiddleware
} from '../../src/zashiki-middleware'

import {
  promiseMiddleware
} from '../../src/promise-middleware'

export const configureStore = (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(
      thunk,
      zashikiMiddleware,
      promiseMiddleware()
    )
  )
)
