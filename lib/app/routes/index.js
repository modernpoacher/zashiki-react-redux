import React from 'react' // eslint-disable-line no-unused-vars

import {
  Route,
  IndexRoute
} from 'react-router'

import {
  Boiler
} from 'react-boiler'
import {
  Gears
} from 'react-gears'

import IndexPage from './index-page'

import EmbarkStagePage from './embark-stage'
import DebarkStagePage from './debark-stage'

import AlphaStagePage from './alpha-stage'
import OmegaStagePage from './omega-stage'

const {
  EMBARK,
  DEBARK,
  EMBARK_STAGE,
  DEBARK_STAGE,
  ALPHA_PATTERN,
  OMEGA_PATTERN,
  EMBARK_PATTERN,
  DEBARK_PATTERN
} = Boiler

const EMBARK_ROUTE = Gears.path({ [EMBARK]: EMBARK_STAGE }, EMBARK_PATTERN)
const DEBARK_ROUTE = Gears.path({ [DEBARK]: DEBARK_STAGE }, DEBARK_PATTERN)

export default (
  <Route path='/'>
    <IndexRoute component={IndexPage} />
    <Route path={EMBARK_ROUTE} component={EmbarkStagePage} />
    <Route path={DEBARK_ROUTE} component={DebarkStagePage} />
    <Route path={ALPHA_PATTERN}>
      <IndexRoute component={AlphaStagePage} />
      <Route path={OMEGA_PATTERN} component={OmegaStagePage} />
    </Route>
  </Route>
)
