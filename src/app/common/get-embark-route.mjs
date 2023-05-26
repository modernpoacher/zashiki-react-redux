import debug from 'debug'

import Signals from 'shinkansen-engine/components/signals'

import Rails from 'shinkansen-engine/components/rails'

const log = debug('zashiki-react-redux/app/common/get-embark-route')

log('`zashiki` is awake')

const {
  EMBARK,
  EMBARK_STAGE,
  EMBARK_PATTERN
} = Signals

export default function getEmbarkRoute () {
  log('getEmbarkRoute')

  return Rails.to({ [EMBARK]: EMBARK_STAGE }, EMBARK_PATTERN)
}
