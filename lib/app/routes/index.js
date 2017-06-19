import React from 'react' // eslint-disable-line no-unused-vars

import {
  Route,
  IndexRoute
} from 'react-router'

import {
  Steam
} from 'react-steam'

import IndexPage from './index-page'

import EmbarkStagePage from './embark-stage'
import DebarkStagePage from './debark-stage'

import AlphaStagePage from './alpha-stage'
import OmegaStagePage from './omega-stage'

const {
  EMBARK,
  DEBARK
} = Steam

const EMBARK_ROUTE = `/${EMBARK}-stage`
const DEBARK_ROUTE = `/${DEBARK}-stage`

export default (
  <Route path='/'>
    <IndexRoute component={IndexPage} />
    <Route path={EMBARK_ROUTE} component={EmbarkStagePage} />
    <Route path={DEBARK_ROUTE} component={DebarkStagePage} />
    <Route path='/:alpha'>
      <IndexRoute component={AlphaStagePage} />
      <Route path='/:alpha/:omega' component={OmegaStagePage} />
    </Route>
  </Route>
)
