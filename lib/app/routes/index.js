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

import AllStagesPage from './AllStages'
import StageZeroPage from './StageZero'

Gears.pattern('/:allStages/:stageZero')

export default (
  <Route path='/'>
    <IndexRoute component={IndexPage} />
    <Route path='/halt-stage' component={HaltStagePage} />
    <Route path='/list-stage' component={ListStagePage} />
    <Route path='/:allStages'>
      <IndexRoute component={AllStagesPage} />
      <Route path='/:allStages/:stageZero' component={StageZeroPage} />
    </Route>
  </Route>
)
