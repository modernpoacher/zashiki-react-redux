import React from 'react' // eslint-disable-line no-unused-vars
import {
  Router,
  browserHistory
} from 'react-router'

import Routes from '../routes'

export default (
  <Router history={browserHistory}>
    {Routes}
  </Router>
)
