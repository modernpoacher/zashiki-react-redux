import Rails from 'shinkansen-engine/lib/components/rails'

import Signals from 'shinkansen-engine/lib/components/signals'

export default function getPathname ({
  [Signals.ALPHA]: alpha,
  [Signals.OMEGA]: omega,
  [Signals.EMBARK]: embark,
  [Signals.DEBARK]: debark
} = {}) {
  if (alpha && omega) { // omega cannot appear on its own
    return Rails.to({ [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega }, Signals.OMEGA_PATTERN)
  } else if (embark) {
    return Rails.to({ [Signals.EMBARK]: embark }, Signals.EMBARK_PATTERN)
  } else if (debark) {
    return Rails.to({ [Signals.DEBARK]: debark }, Signals.DEBARK_PATTERN)
  } else if (alpha) { // alpha can appear on its own
    return Rails.to({ [Signals.ALPHA]: alpha }, Signals.ALPHA_PATTERN)
  }
}
