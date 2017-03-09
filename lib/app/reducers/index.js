import {
  combineReducers
} from 'redux'

import debark from './debark-stage'
import embark from './embark-stage'
import routeMaster from './route-master'

const reducers = combineReducers({
  debark,
  embark,
  routeMaster
})

export default reducers
