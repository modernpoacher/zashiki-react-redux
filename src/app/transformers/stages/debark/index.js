import debug from 'debug'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/lib/transformers/transmission'

import {
  REJECTED
} from '@modernpoacher/zashiki-react-redux/app/common'

/*
 *  Correct this path
 */
import toCheckAnswers from 'shinkansen-pinion/lib/transformers/check-answers'

import { transformRejected } from '@modernpoacher/zashiki-react-redux/app/transformers'

const log = debug('zashiki-react-redux:app:transformers:stages:debark')

export function transformDebark (status, {
  alpha: definition = {},
  omega: definitions = [],
  token = {},
  resource
}) {
  log('transformDebark')

  return {
    definition,
    definitions: definitions.map(({
      description,
      definition,
      resource,
      response = {} // hash
    }) => {
      return {
        ...(description ? { description } : {}),
        ...(definition ? { definition: toCheckAnswers(toZashiki(definition, response), resource) } : { definition: {} }),
        ...(resource ? { resource } : {}),
        response
      }
    }),
    ...(resource ? { resource } : {}),
    token,
    status
  }
}

export function transformOmega ({ definition, response, ...route }) {
  log('transformOmega')

  return {
    ...route,
    definition,
    response: fromDocumentToHash(response, definition)
  }
}

export function transformRoute ({ omega = [], ...route }) {
  log('transformRoute')

  return {
    ...route,
    omega: omega.map(transformOmega)
  }
}

export const transform = ({ status, ...embark } = {}) => (status === REJECTED) ? transformRejected(status, embark) : transformDebark(status, embark)
