import React from 'react' // eslint-disable-line no-unused-vars

import {
  Route,
  IndexRoute
} from 'react-router'

import IndexPage from './IndexPage'

import EmbarkStagePage from './EmbarkStage'
import DebarkStagePage from './DebarkStage'

import AlphaStagePage from './AlphaStage'
import OmegaStagePage from './OmegaStage'

const EMBARK_STAGE_PATH = '/embark-stage'
const DEBARK_STAGE_PATH = '/debark-stage'

export default (
  <Route path='/'>
    <IndexRoute component={IndexPage} />
    <Route path={EMBARK_STAGE_PATH} component={EmbarkStagePage} />
    <Route path={DEBARK_STAGE_PATH} component={DebarkStagePage} />
    <Route path='/:alpha'>
      <IndexRoute component={AlphaStagePage} />
      <Route path='/:alpha/:omega' component={OmegaStagePage} />
    </Route>
  </Route>
)
