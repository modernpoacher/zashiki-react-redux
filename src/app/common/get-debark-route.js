import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

import Rails from 'shinkansen-engine/lib/components/rails'

const log = debug('zashiki:app:common:get-debark-route')

const {
  DEBARK,
  DEBARK_STAGE,
  DEBARK_PATTERN
} = Signals

export default function getDebarkRoute () {
  log('getDebarkRoute')

  return Rails.to({ [DEBARK]: DEBARK_STAGE }, DEBARK_PATTERN)
}
