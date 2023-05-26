import debug from 'debug'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import {
  REJECTED
} from '#app/common'

import {
  transformRejected
} from '#app/transformers'

const log = debug('zashiki-react-redux/app/transformers/stages/alpha')

log('`zashiki` is awake')

export function transformAlpha (status, {
  omega = [],
  resource
}) {
  /*
   *  log('transformAlpha')
   */

  return {
    status,
    definitions: omega.map(({
      description,
      definition,
      resource,
      response = {}, // hash
      errors = []
    }) => {
      /*
   *  log('transformOmega')
   */

      return {
        ...(description ? { description } : {}),
        ...(definition ? { definition: toZashiki(definition, response) } : { definition: {} }),
        ...(resource ? { resource } : {}),
        response,
        errors
      }
    }),
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
