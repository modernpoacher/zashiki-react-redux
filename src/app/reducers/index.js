import {
  combineReducers
} from 'redux'

import Signals from 'shinkansen-engine/lib/components/signals'

import embark from './stages/embark'
import alpha from './stages/alpha'
import omega from './stages/omega'
import debark from './stages/debark'
import confirm from './stages/confirm'
import zashiki from './zashiki'

const {
  EMBARK,
  ALPHA,
  OMEGA,
  DEBARK,
  CONFIRM
} = Signals

export default combineReducers({
  [EMBARK]: embark,
  [ALPHA]: alpha,
  [OMEGA]: omega,
  [DEBARK]: debark,
  [CONFIRM]: confirm,
  zashiki
})
