import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'
import promiseMiddleware from 'zashiki-promise-middleware'
import routingMiddleware from 'zashiki-routing-middleware'

import reducers from 'zashiki-react-redux/app/reducers'

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
