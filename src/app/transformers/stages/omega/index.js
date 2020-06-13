import debug from 'debug'

import {
  REJECTED
} from '@modernpoacher/zashiki-react-redux/app/common'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/lib/transformers/transmission'

import {
  transformRejected
} from '@modernpoacher/zashiki-react-redux/app/transformers'

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

export default ({ status, ...omega }) => (status === REJECTED) ? transformRejected(status, omega) : transformOmega(status, omega)
