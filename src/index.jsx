import React from 'react'
import {
  createRoot
} from 'react-dom/client'
import {
  Provider,
  ReactReduxContext
} from 'react-redux'
import debug from 'debug'

import configureStore from '#zashiki-react-redux/app/store'

import Router from '#zashiki-react-redux/app/router'

const log = debug('zashiki-react-redux')

log('`zashiki` is awake')

const state = JSON.parse(document.getElementById('initial-state').textContent || '{}')
const store = configureStore(state)

function App () {
  return (
    <Provider store={store} context={ReactReduxContext}>
      {Router}
    </Provider>
  )
}

const app = document.getElementById('app')

createRoot(app)
  .render(<App />)
