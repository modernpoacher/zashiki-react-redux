import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider, ReactReduxContext
} from 'react-redux'
import debug from 'debug'

import configureStore from '#app/store'

import Router from '#app/router'

const log = debug('zashiki-react-redux')

const state = JSON.parse(document.getElementById('initial-state').textContent || '{}')
const store = configureStore(state)

const App = (
  <Provider store={store} context={ReactReduxContext}>
    {Router}
  </Provider>
)

const app = document.getElementById('app')

log('`zashiki` is awake')

ReactDOM.hydrate(
  App,
  app
)
