import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'
import promiseMiddleware from 'zashiki-promise-middleware'
import routingMiddleware from 'zashiki-routing-middleware'

import reducers from 'zashiki-react-redux/app/reducers'
import axios from 'zashiki-react-redux/app/actions'

export const configureStore = (state) => (
  createStore(
    reducers,
    state,
    compose(
      applyMiddleware(
        axios,
        thunk,
        promiseMiddleware(),
        routingMiddleware
      )
    )
  )
)
