import debug from '#zashiki-react-redux/debug'

import {
  REJECTED
} from '#zashiki-react-redux/app/common'

import {
  toZashiki
} from 'shinkansen-engine/transformers/transmission'

import {
  transformRejected
} from '#zashiki-react-redux/app/transformers'

const log = debug('zashiki-react-redux/app/transformers/stages/alpha')

log('`zashiki` is awake')

export function transformEmbark (status, stage) {
  /*
   *  log('transformEmbark')
   */

  const {
    definition,
    response = {},
    errors = []
  } = stage

  return {
    ...(definition ? { definition: toZashiki(definition, response) } : { definition: {} }),
    response,
    errors,
    status
  }
}

export default ({ status, ...embark } = {}) => (status === REJECTED) ? transformRejected(status, embark) : transformEmbark(status, embark)
