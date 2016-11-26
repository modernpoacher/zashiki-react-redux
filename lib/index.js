import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import {
  Provider
} from 'react-redux'
import {
  configureStore
} from './app/store'

import Router from './app/router'

const app = document.getElementById('app')
const state = JSON.parse(app.getAttribute('data-state') || '{}')
const store = configureStore(state)

const App = (
  <Provider store={store}>
    {Router}
  </Provider>
)

ReactDOM.render(
  App,
  app
)
