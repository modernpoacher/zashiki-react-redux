import debug from 'debug'

import {
  toZashiki
} from 'shinkansen-engine/transformers/transmission'

import {
  REJECTED
} from '@modernpoacher/zashiki-react-redux/app/common'

import {
  transformRejected
} from '@modernpoacher/zashiki-react-redux/app/transformers'

const log = debug('zashiki-react-redux/app/transformers/stages/alpha')

log('`zashiki` is awake')

export function transformEmbark (status, { definition, response = {}, errors = [] }) {
  /*
   *  log('transformEmbark')
   */

  return {
    ...(definition ? { definition: toZashiki(definition, response) } : { definition: {} }),
    response,
    errors,
    status
  }
}

export default ({ status, ...embark } = {}) => (status === REJECTED) ? transformRejected(status, embark) : transformEmbark(status, embark)
