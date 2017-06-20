import {
  Boiler
} from 'react-boiler'

import {
  ZASHIKI_OMEGA_CHANGE,
  ZASHIKI_OMEGA_FETCH,
  ZASHIKI_OMEGA_STORE,
  ZASHIKI_OMEGA_QUERY
} from '../../../actions/stages/omega-stage'

const {
  PENDING
} = Boiler
const STATE = {
  status: PENDING
}
const ACTION = {}

/**
 *  Zashiki/Omega Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function omegaReducer (state = STATE, { type, r: { data } = {} } = ACTION) {
  switch (type) {
    case ZASHIKI_OMEGA_CHANGE:
      return { ...data }

    case ZASHIKI_OMEGA_FETCH:
      return { ...data }

    case ZASHIKI_OMEGA_STORE:
      return { ...data }

    case ZASHIKI_OMEGA_QUERY:
      return { ...data }

    default:
      return state
  }
}
