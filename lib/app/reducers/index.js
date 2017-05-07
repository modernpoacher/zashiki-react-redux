import {
  combineReducers
} from 'redux'

import debark from './debark-stage'
import embark from './embark-stage'
import zashiki from './zashiki'
import alpha from './stages/alpha-stage'
import omega from './stages/omega-stage'

const reducers = combineReducers({
  debark,
  embark,
  zashiki,
  alpha,
  omega
})

export default reducers
