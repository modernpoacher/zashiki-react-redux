import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

import {
  toZashiki
} from 'shinkansen-engine/lib/transformers/transmission'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

const log = debug('zashiki-react-redux:app:transformers:stages:alpha')

function transformAlpha (status, {
  omega = [],
  resource,
  gears = {
    reverse: {},
    forward: {}
  },
  state = {
    index: 0,
    count: 0
  }
}) {
  log('transformAlpha')

  return {
    definitions: omega.map(({
      description,
      definition,
      resource,
      response = {} // hash
    }) => {
      return {
        ...(description ? { description } : {}),
        ...(definition ? { definition: toZashiki(definition, response) } : { definition: {} }),
        ...(resource ? { resource } : {}),
        response
      }
    }),
    ...(resource ? { resource } : {}),
    gears,
    state,
    status
  }
}

export const transform = ({ status = Signals.FAILURE, ...alpha } = {}) => (status === Signals.FAILURE) ? transformFailure(status, alpha) : transformAlpha(status, alpha)
