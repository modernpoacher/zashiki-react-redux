import React from 'react'

import {
  Routes,
  Route
} from 'react-router'

import Signals from 'shinkansen-engine/components/signals'

import getEmbarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-embark-route'
import getDebarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-debark-route'
import getConfirmRoute from '@modernpoacher/zashiki-react-redux/app/common/get-confirm-route'

import IndexPage from './index-page/index.jsx'
import EmbarkStagePage from './stages/embark/index.jsx'
import DebarkStagePage from './stages/debark/index.jsx'
import ConfirmStagePage from './stages/confirm/index.jsx'
import AlphaStagePage from './stages/alpha/index.jsx'
import OmegaStagePage from './stages/omega/index.jsx'

const {
  ALPHA_PATTERN,
  OMEGA_PATTERN
} = Signals

export default (
  <Routes>
    <Route exact path='/' element={<IndexPage />} />
    <Route exact path={getEmbarkRoute()} element={<EmbarkStagePage />} />
    <Route exact path={getDebarkRoute()} element={<DebarkStagePage />} />
    <Route exact path={getConfirmRoute()} element={<ConfirmStagePage />} />
    <Route exact path={ALPHA_PATTERN} element={<AlphaStagePage />} />
    <Route exact path={OMEGA_PATTERN} element={<OmegaStagePage />} />
  </Routes>
)
