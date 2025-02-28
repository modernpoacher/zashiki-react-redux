import debug from 'debug'

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

export function transformConfirm (status, stage) {
  /*
   *  log('transformConfirm')
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

export default ({ status, ...confirm } = {}) => (status === REJECTED) ? transformRejected(status, confirm) : transformConfirm(status, confirm)
