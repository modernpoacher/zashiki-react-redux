import {
  combineReducers
} from 'redux'

import Signals from 'shinkansen-engine/components/signals'

import alpha from './stages/alpha/index.mjs'
import omega from './stages/omega/index.mjs'
import embark from './stages/embark/index.mjs'
import debark from './stages/debark/index.mjs'
import confirm from './stages/confirm/index.mjs'
import zashiki from './zashiki/index.mjs'

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
