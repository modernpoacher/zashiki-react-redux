import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider
} from 'react-redux'

import initialState from 'redux-storage-middleware/lib/reducer/initial-state'

import {
  configureStore
} from 'zashiki-react-redux/app/store'

import Router from 'zashiki-react-redux/app/router'

{
  const app = document.getElementById('app')
  if (app) {
    const state = JSON.parse(
      app.getAttribute('data-state') || '{}'
    )

    const reduxStorage = initialState()
    const store = configureStore({ ...state, reduxStorage })

    const App = (
      <Provider store={store}>
        {Router}
      </Provider>
    )

    ReactDOM.render(
      App,
      app
    )

    app.removeAttribute('data-state')
  }
}
