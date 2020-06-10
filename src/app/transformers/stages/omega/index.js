import Signals from 'shinkansen-engine/lib/components/signals'

import {
  toZashiki,
  fromDocumentToHash,
  fromHashToDocument
} from 'shinkansen-engine/lib/transformers/transmission'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

const transformOmega = (status, {
  resource,
  definition,
  response,
  gears = {
    reverse: {},
    forward: {}
  },
  state = {
    index: 0,
    count: 0
  }
}) => {
  return ({
    ...(definition ? { definition: toZashiki(definition, response !== undefined ? fromDocumentToHash(response, definition) : undefined) } : { definition: {} }),
    ...(resource ? { resource } : {}),
    gears,
    state,
    status
  })
}

export const fromDocumentToZashiki = ({ status, ...omega }) => (status === Signals.FAILURE) ? transformFailure(status, omega) : transformOmega(status, omega)

export const fromZashikiToDocument = ({ definition = {}, response } = {}) => fromHashToDocument(definition, response)
