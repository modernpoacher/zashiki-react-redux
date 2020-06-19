import React from 'react'

import {
  Switch,
  Route
} from 'react-router-dom'

import Signals from 'shinkansen-engine/lib/components/signals'

import getEmbarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-embark-route'
import getDebarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-debark-route'
import getConfirmRoute from '@modernpoacher/zashiki-react-redux/app/common/get-confirm-route'

import IndexPage from './index-page'

import EmbarkStagePage from './stages/embark'
import DebarkStagePage from './stages/debark'
import ConfirmStagePage from './stages/confirm'

import AlphaStagePage from './stages/alpha'
import OmegaStagePage from './stages/omega'

const {
  ALPHA_PATTERN,
  OMEGA_PATTERN
} = Signals

export default (
  <Switch>
    <Route exact path='/' component={IndexPage} />
    <Route exact path={getEmbarkRoute()} component={EmbarkStagePage} />
    <Route exact path={getDebarkRoute()} component={DebarkStagePage} />
    <Route exact path={getConfirmRoute()} component={ConfirmStagePage} />
    <Route exact path={ALPHA_PATTERN} component={AlphaStagePage} />
    <Route exact path={OMEGA_PATTERN} component={OmegaStagePage} />
  </Switch>
)
