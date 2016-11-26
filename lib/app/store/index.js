import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'
import reducers from '../reducers'
import promiseMiddleware from '../../src/promise-middleware'

export const configureStore = (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(promiseMiddleware)
  )
)
