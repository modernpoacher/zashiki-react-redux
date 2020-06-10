import {
  toZashiki,
  fromDocumentToHash,
  fromHashToDocument
} from 'shinkansen-engine/lib/transformers/transmission'

import Signals from 'shinkansen-engine/lib/components/signals'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

const transformEmbark = (status, {
  definition,
  response
}) => ({
  ...(definition ? { definition: toZashiki(definition, response !== undefined ? fromDocumentToHash(response, definition) : undefined) } : { definition: {} }),
  status
})

export const fromDocumentToZashiki = ({ status, ...embark } = {}) => (status === Signals.FAILURE) ? transformFailure(status, embark) : transformEmbark(status, embark)

export const fromZashikiToDocument = ({ definition = {}, response } = {}) => fromHashToDocument(definition, response)
