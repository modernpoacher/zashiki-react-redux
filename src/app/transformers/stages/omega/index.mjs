import debug from 'debug'

import {
  REJECTED
} from '#app/common'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import {
  transformRejected
} from '#app/transformers'

const log = debug('zashiki-react-redux/app/transformers/stages/omega')

log('`zashiki` is awake')

export function transformOmega (status, {
  description,
  definition,
  resource,
  response = {}, // hash
  errors = []
}) {
  /*
   *  log('transformOmega')
   */

  return {
    status,
    ...(description ? { description } : {}),
    ...(definition ? { definition: toZashiki(definition, response) } : { definition: {} }),
    ...(resource ? { resource } : {}),
    response,
    errors
  }
}

export function transformRoute ({ definition, response, ...route }) {
  /*
   *  log('transformRoute')
   */

  return {
    ...route,
    definition,
    response: fromDocumentToHash(response, definition)
  }
}

export default ({ status, ...omega }) => (status === REJECTED) ? transformRejected(status, omega) : transformOmega(status, omega)
