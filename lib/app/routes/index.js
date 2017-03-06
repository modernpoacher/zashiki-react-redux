import React from 'react' // eslint-disable-line no-unused-vars

import {
  Route,
  IndexRoute
} from 'react-router'

import {
  Gears
} from 'react-gears/lib'

import IndexPage from './IndexPage'

import HaltStagePage from './HaltStage'
import ListStagePage from './ListStage'

import AlphaStagePage from './AlphaStage'
import OmegaStagePage from './OmegaStage'

Gears.pattern('/:alphaStage/:omegaStage')

export default (
  <Route path='/'>
    <IndexRoute component={IndexPage} />
    <Route path='/halt-stage' component={HaltStagePage} />
    <Route path='/list-stage' component={ListStagePage} />
    <Route path='/:alphaStage'>
      <IndexRoute component={AlphaStagePage} />
      <Route path='/:alphaStage/:omegaStage' component={OmegaStagePage} />
    </Route>
  </Route>
)
