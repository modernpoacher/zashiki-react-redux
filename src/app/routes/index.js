import React from 'react' // eslint-disable-line no-unused-vars

import {
  Route,
  IndexRoute
} from 'react-router'

import {
  Signals
} from 'shinkansen-signals'
import {
  Rails
} from 'shinkansen-rails'

import IndexPage from './index-page'

import EmbarkStagePage from './stages/embark'
import DebarkStagePage from './stages/debark'

import AlphaStagePage from './stages/alpha'
import OmegaStagePage from './stages/omega'

const {
  EMBARK,
  DEBARK,
  EMBARK_STAGE,
  DEBARK_STAGE,
  ALPHA_PATTERN,
  OMEGA_PATTERN,
  EMBARK_PATTERN,
  DEBARK_PATTERN
} = Signals

const EMBARK_ROUTE = Rails.to({ [EMBARK]: EMBARK_STAGE }, EMBARK_PATTERN)
const DEBARK_ROUTE = Rails.to({ [DEBARK]: DEBARK_STAGE }, DEBARK_PATTERN)

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
