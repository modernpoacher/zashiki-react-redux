import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/lib/transformers/transmission'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

const log = debug('zashiki-react-redux:app:transformers:stages:omega')

export function transformOmega (status, {
  description,
  definition,
  resource,
  response = {}, // hash
  gears = {
    reverse: {},
    forward: {}
  },
  state = {
    index: 0,
    count: 0
  }
}) {
  log('transformOmega')

  return {
    ...(description ? { description } : {}),
    ...(definition ? { definition: toZashiki(definition, response) } : { definition: {} }),
    ...(resource ? { resource } : {}),
    response,
    gears,
    state,
    status
  }
}

export function transformRoute ({ definition, response, ...route }) {
  log('transformRoute')

  return {
    ...route,
    definition,
    response: fromDocumentToHash(response, definition)
  }
}

export const transform = ({ status, ...omega }) => (status === Signals.FAILURE) ? transformFailure(status, omega) : transformOmega(status, omega)
