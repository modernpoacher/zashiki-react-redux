import {
  combineReducers
} from 'redux'

import haltStage from './halt-stage'
import listStage from './list-stage'
import routeMaster from './route-master'

const reducers = combineReducers({
  haltStage,
  listStage,
  routeMaster
})

export default reducers
