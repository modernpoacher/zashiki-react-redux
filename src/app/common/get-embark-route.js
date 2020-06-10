import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

import Rails from 'shinkansen-engine/lib/components/rails'

const log = debug('zashiki-react-redux:app:common:get-embark-route')

const {
  EMBARK,
  EMBARK_STAGE,
  EMBARK_PATTERN
} = Signals

export default function getEmbarkRoute () {
  log('getEmbarkRoute')

  return Rails.to({ [EMBARK]: EMBARK_STAGE }, EMBARK_PATTERN)
}
