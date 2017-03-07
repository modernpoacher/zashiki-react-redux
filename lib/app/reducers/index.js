import {
  combineReducers
} from 'redux'

import debark from './halt-stage'
import embark from './list-stage'
import routeMaster from './route-master'

const reducers = combineReducers({
  debark,
  embark,
  routeMaster
})

export default reducers
