import debug from '#zashiki-react-redux/debug'

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

const log = debug('zashiki-react-redux/app/transformers/stages/alpha')

log('`zashiki` is awake')

function transformDefinition (stage) {
  /*
   *  log('transformDefinition')
   */

  const {
    description,
    definition,
    resource,
    response = {}, // hash
    errors = []
  } = stage

  return {
    ...(description ? { description } : {}),
    ...(definition ? { definition: toZashiki(definition, response) } : { definition: {} }),
    ...(resource ? { resource } : {}),
    response,
    errors
  }
}

export function transformAlpha (status, {
  omega = [],
  resource
}) {
  /*
   *  log('transformAlpha')
   */

  return {
    status,
    definitions: omega.map(transformDefinition),
    ...(resource ? { resource } : {})
  }
}

export function transformOmega ({ definition, response, ...route }) {
  /*
   *  log('transformOmega')
   */

  return {
    ...route,
    definition,
    response: fromDocumentToHash(response, definition)
  }
}

export function transformRoute ({ omega = [], ...route }) {
  /*
   *  log('transformRoute')
   */

  return {
    ...route,
    omega: omega.map(transformOmega)
  }
}

export default ({ status, ...alpha } = {}) => (status === REJECTED) ? transformRejected(status, alpha) : transformAlpha(status, alpha)
