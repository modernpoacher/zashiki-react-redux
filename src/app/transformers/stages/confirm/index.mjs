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

export function transformConfirm (status, { definition, response = {}, errors = [] }) {
  /*
   *  log('transformConfirm')
   */

  return {
    ...(definition ? { definition: toZashiki(definition, response) } : { definition: {} }),
    response,
    errors,
    status
  }
}

export default ({ status, ...confirm } = {}) => (status === REJECTED) ? transformRejected(status, confirm) : transformConfirm(status, confirm)
