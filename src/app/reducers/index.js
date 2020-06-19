import {
  combineReducers
} from 'redux'

import Signals from 'shinkansen-engine/lib/components/signals'

import alpha from './stages/alpha'
import omega from './stages/omega'
import embark from './stages/embark'
import debark from './stages/debark'
import confirm from './stages/confirm'
import zashiki from './zashiki'

const {
  ALPHA,
  OMEGA,
  EMBARK,
  DEBARK,
  CONFIRM
} = Signals

export default combineReducers({
  [ALPHA]: alpha,
  [OMEGA]: omega,
  [EMBARK]: embark,
  [DEBARK]: debark,
  [CONFIRM]: confirm,
  zashiki
})
