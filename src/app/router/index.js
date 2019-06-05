import React from 'react' // eslint-disable-line no-unused-vars
import {
  Router
} from 'react-router'

import {
  history
} from 'zashiki-routing-middleware'

import Routes from '@modernpoacher/zashiki-react-redux/app/routes'

export default (
  <Router history={history}>
    {Routes}
  </Router>
)
