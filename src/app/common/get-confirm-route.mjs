import debug from 'debug'

import Signals from 'shinkansen-engine/components/signals'

import Rails from 'shinkansen-engine/components/rails'

const log = debug('zashiki-react-redux/app/common/get-confirm-route')

log('`zashiki` is awake')

const {
  CONFIRM,
  CONFIRM_STAGE,
  CONFIRM_PATTERN
} = Signals

export default function getConfirmRoute () {
  /*
   *  log('getConfirmRoute')
   */

  return Rails.to({ [CONFIRM]: CONFIRM_STAGE }, CONFIRM_PATTERN)
}
