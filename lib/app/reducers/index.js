import {
  combineReducers
} from 'redux'

import debark from './debark-stage'
import embark from './embark-stage'
import routeMaster from './route-master'
import alpha from './stages/alpha-stage'
import omega from './stages/omega-stage'

const reducers = combineReducers({
  debark,
  embark,
  routeMaster,
  alpha,
  omega
})

export default reducers
