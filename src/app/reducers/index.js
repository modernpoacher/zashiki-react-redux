import {
  combineReducers
} from 'redux'

import {
  Signals
} from 'shinkansen-signals'

import debark from './stages/debark'
import embark from './stages/embark'
import alpha from './stages/alpha'
import omega from './stages/omega'
import zashiki from './zashiki'

const {
  DEBARK,
  EMBARK,
  ALPHA,
  OMEGA
} = Signals

export default combineReducers({
  [DEBARK]: debark,
  [EMBARK]: embark,
  [ALPHA]: alpha,
  [OMEGA]: omega,
  zashiki
})
