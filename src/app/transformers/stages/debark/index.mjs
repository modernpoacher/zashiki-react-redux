import debug from 'debug'

import {
  REJECTED
} from '#zashiki-react-redux/app/common'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import {
  transformAnswer
} from 'shinkansen-engine/transformers/pinion/check-answers'

import {
  transformRejected
} from '#zashiki-react-redux/app/transformers'

const log = debug('zashiki-react-redux/app/transformers/stages/debark')

log('`zashiki` is awake')

function transformDefinition ({
  description,
  definition,
  resource,
  response = {}, // hash
  errors = []
}) {
  /*
   *  log('transformDefinition')
   */

  return {
    ...(description ? { description } : {}),
    ...(definition ? { definition: transformAnswer(toZashiki(definition, response), resource) } : { definition: {} }),
    ...(resource ? { resource } : {}),
    response,
    errors
  }
}

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
    definitions: definitions.map(transformDefinition),
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
