import debug from 'debug'

import {
  toZashiki
} from 'shinkansen-engine/lib/transformers/transmission'

import Signals from 'shinkansen-engine/lib/components/signals'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

const log = debug('zashiki-react-redux:app:transformers:stages:alpha')

function transformConfirm (status, { definition, response = {} }) {
  log('transformConfirm')

  return {
    ...(definition ? { definition: toZashiki(definition, response) } : { definition: {} }),
    response,
    status
  }
}

export const transform = ({ status, ...confirm } = {}) => (status === Signals.FAILURE) ? transformFailure(status, confirm) : transformConfirm(status, confirm)
