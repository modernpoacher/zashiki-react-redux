import Signals from 'shinkansen-engine/lib/components/signals'

import Rails from 'shinkansen-engine/lib/components/rails'

const {
  EMBARK,
  EMBARK_STAGE,
  EMBARK_PATTERN
} = Signals

export default function getEmbarkRoute () {
  return Rails.to({ [EMBARK]: EMBARK_STAGE }, EMBARK_PATTERN)
}
