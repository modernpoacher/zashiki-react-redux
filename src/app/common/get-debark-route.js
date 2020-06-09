import Signals from 'shinkansen-engine/lib/components/signals'

import Rails from 'shinkansen-engine/lib/components/rails'

const {
  DEBARK,
  DEBARK_STAGE,
  DEBARK_PATTERN
} = Signals

export default function getDebarkRoute () {
  return Rails.to({ [DEBARK]: DEBARK_STAGE }, DEBARK_PATTERN)
}
