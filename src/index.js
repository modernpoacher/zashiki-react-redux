import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider
} from 'react-redux'

import configureStore from '@modernpoacher/zashiki-react-redux/app/store'

import Router from '@modernpoacher/zashiki-react-redux/app/router'

const state = JSON.parse(document.getElementById('initial-state').textContent || '{}')
const store = configureStore(state)

const App = (
  <Provider store={store}>
    {Router}
  </Provider>
)

const app = document.getElementById('app')

ReactDOM.hydrate(
  App,
  app
)
