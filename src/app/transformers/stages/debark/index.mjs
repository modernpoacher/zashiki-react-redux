import debug from 'debug'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import toCheckAnswers from 'shinkansen-engine/transformers/pinion/check-answers'

import {
  REJECTED
} from '#app/common'

import {
  transformRejected
} from '#app/transformers'

const log = debug('zashiki-react-redux/app/transformers/stages/debark')

log('`zashiki` is awake')

export function transformDebark (status, {
  alpha: definition = {},
  omega: definitions = [],
  token = {},
  resource
}) {
  /*
   *  log('transformDebark')
   */

  return {
    definition,
    definitions: definitions.map(({
      description,
      definition,
      resource,
      response = {}, // hash
      errors = []
    }) => {
      return {
        ...(description ? { description } : {}),
        ...(definition ? { definition: toCheckAnswers(toZashiki(definition, response), resource) } : { definition: {} }),
        ...(resource ? { resource } : {}),
        response,
        errors
      }
    }),
    ...(resource ? { resource } : {}),
    token,
    status
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

export default ({ status, ...embark } = {}) => (status === REJECTED) ? transformRejected(status, embark) : transformDebark(status, embark)
