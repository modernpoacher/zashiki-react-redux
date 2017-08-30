import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider
} from 'react-redux'

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

    app.removeAttribute('data-state')
  }
}
