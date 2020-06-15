import debug from 'debug'

import {
  toZashiki
} from 'shinkansen-engine/lib/transformers/transmission'

import {
  REJECTED
} from '@modernpoacher/zashiki-react-redux/app/common'

import {
  transformRejected
} from '@modernpoacher/zashiki-react-redux/app/transformers'

const log = debug('zashiki-react-redux:app:transformers:stages:alpha')

export function transformEmbark (status, { definition, response = {} }) {
  log('transformEmbark')

  return {
    ...(definition ? { definition: toZashiki(definition, response) } : { definition: {} }),
    response,
    status
  }
}

export default ({ status, ...embark } = {}) => (status === REJECTED) ? transformRejected(status, embark) : transformEmbark(status, embark)
