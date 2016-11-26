import React from 'react' // eslint-disable-line no-unused-vars
import {
  Route,
  IndexRoute
} from 'react-router'

import IndexPage from './IndexPage'
import ListStagePage from './ListStage'
import StageZeroPage from './StageZero'
import AllStagesPage from './AllStages'

export default (
  <Route path='/'>
    <IndexRoute component={IndexPage} />
    <Route path='/list-stage' component={ListStagePage} />
    <Route path='/:stageZero'>
      <IndexRoute component={StageZeroPage} />
      <Route path='/:stageZero/:allStages' component={AllStagesPage} />
    </Route>
  </Route>
)
