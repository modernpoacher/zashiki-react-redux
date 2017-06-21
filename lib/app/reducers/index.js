import {
  combineReducers
} from 'redux'

import {
  Boiler
} from 'shinkansen-boiler'

import debark from './stages/debark-stage'
import embark from './stages/embark-stage'
import alpha from './stages/alpha-stage'
import omega from './stages/omega-stage'
import zashiki from './zashiki'

const {
  DEBARK,
  EMBARK,
  ALPHA,
  OMEGA
} = Boiler

export default combineReducers({
  [DEBARK]: debark,
  [EMBARK]: embark,
  [ALPHA]: alpha,
  [OMEGA]: omega,
  zashiki
})
