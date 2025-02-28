import debug from 'debug'

import {
  REJECTED
} from '#zashiki-react-redux/app/common'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import {
  transformRejected
} from '#zashiki-react-redux/app/transformers'

const log = debug('zashiki-react-redux/app/transformers/stages/omega')

log('`zashiki` is awake')

export function transformOmega (status, stage) {
  /*
   *  log('transformOmega')
   */

  const {
    description,
    definition,
    resource,
    response = {}, // hash
    errors = []
  } = stage

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
