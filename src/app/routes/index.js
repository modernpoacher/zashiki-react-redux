import React from 'react'

import {
  Switch,
  Route
} from 'react-router-dom'

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
  <Switch>
    <Route exact path='/' component={IndexPage} />
    <Route exact path={EMBARK_ROUTE} component={EmbarkStagePage} />
    <Route exact path={DEBARK_ROUTE} component={DebarkStagePage} />
    <Route exact path={ALPHA_PATTERN} component={AlphaStagePage} />
    <Route exact path={OMEGA_PATTERN} component={OmegaStagePage} />
  </Switch>
)
