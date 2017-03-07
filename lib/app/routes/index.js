import React from 'react' // eslint-disable-line no-unused-vars

import {
  Route,
  IndexRoute
} from 'react-router'

import {
  Gears
} from 'react-gears/lib'

import IndexPage from './IndexPage'

import EmbarkStagePage from './EmbarkStage'
import DebarkStagePage from './DebarkStage'

import AlphaStagePage from './AlphaStage'
import OmegaStagePage from './OmegaStage'

const EMBARK_STAGE_PATH = '/list-stage' // `/${EMBARK_STAGE_PATH}`
const DEBARK_STAGE_PATH = '/halt-stage' // `/${DEBARK_STAGE_PATH}`

Gears.pattern('/:alpha/:omega')

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
