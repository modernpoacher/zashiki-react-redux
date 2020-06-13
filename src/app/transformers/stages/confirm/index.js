import debug from 'debug'

import {
  toZashiki
} from 'shinkansen-engine/lib/transformers/transmission'

import {
  REJECTED
} from '@modernpoacher/zashiki-react-redux/app/common'

import { transformRejected } from '@modernpoacher/zashiki-react-redux/app/transformers'

const log = debug('zashiki-react-redux:app:transformers:stages:alpha')

export function transformConfirm (status, { definition, response = {} }) {
  log('transformConfirm')

  return {
    ...(definition ? { definition: toZashiki(definition, response) } : { definition: {} }),
    response,
    status
  }
}

export const transform = ({ status, ...confirm } = {}) => (status === REJECTED) ? transformRejected(status, confirm) : transformConfirm(status, confirm)
