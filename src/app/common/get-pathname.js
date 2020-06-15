import debug from 'debug'

import Rails from 'shinkansen-engine/lib/components/rails'
import Signals from 'shinkansen-engine/lib/components/signals'

const log = debug('zashiki-react-redux:app:common:get-pathname')

const {
  OMEGA_PATTERN,
  DEBARK_PATTERN,
  CONFIRM_PATTERN,
  EMBARK_PATTERN,
  ALPHA_PATTERN
} = Signals

export default function getPathname (resource = {}) {
  log('getPathname')

  if (Rails.go(resource, OMEGA_PATTERN)) { // omega cannot appear on its own
    return Rails.to(resource, OMEGA_PATTERN)
  } else {
    if (Rails.go(resource, DEBARK_PATTERN)) {
      return Rails.to(resource, DEBARK_PATTERN)
    } else {
      if (Rails.go(resource, CONFIRM_PATTERN)) {
        return Rails.to(resource, CONFIRM_PATTERN)
      } else {
        if (Rails.go(resource, EMBARK_PATTERN)) {
          return Rails.to(resource, EMBARK_PATTERN)
        } else {
          if (Rails.go(resource, ALPHA_PATTERN)) { // alpha can appear on its own
            return Rails.to(resource, ALPHA_PATTERN)
          }
        }
      }
    }
  }

  return null
}
