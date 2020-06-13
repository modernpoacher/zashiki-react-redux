import debug from 'debug'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/lib/transformers/transmission'

import {
  REJECTED
} from '@modernpoacher/zashiki-react-redux/app/common'

import { transformRejected } from '@modernpoacher/zashiki-react-redux/app/transformers'

const log = debug('zashiki-react-redux:app:transformers:stages:alpha')

export function transformAlpha (status, {
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

export const transform = ({ status, ...alpha } = {}) => (status === REJECTED) ? transformRejected(status, alpha) : transformAlpha(status, alpha)
