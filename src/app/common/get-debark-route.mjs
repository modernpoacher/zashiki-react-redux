import debug from 'debug'

import Signals from 'shinkansen-engine/components/signals'

import Rails from 'shinkansen-engine/components/rails'

const log = debug('zashiki-react-redux/app/common/get-debark-route')

log('`zashiki` is awake')

const {
  DEBARK,
  DEBARK_STAGE,
  DEBARK_PATTERN
} = Signals

export default function getDebarkRoute () {
  log('getDebarkRoute')

  return Rails.to({ [DEBARK]: DEBARK_STAGE }, DEBARK_PATTERN)
}
