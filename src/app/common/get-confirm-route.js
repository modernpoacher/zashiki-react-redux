import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

import Rails from 'shinkansen-engine/lib/components/rails'

const log = debug('zashiki-react-redux:app:common:get-confirm-route')

const {
  CONFIRM,
  CONFIRM_STAGE,
  CONFIRM_PATTERN
} = Signals

export default function getConfirmRoute () {
  log('getConfirmRoute')

  return Rails.to({ [CONFIRM]: CONFIRM_STAGE }, CONFIRM_PATTERN)
}
