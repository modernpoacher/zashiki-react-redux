import {
  Steam
} from 'react-steam'

import {
  ZASHIKI_OMEGA_CHANGE,
  ZASHIKI_OMEGA_FETCH,
  ZASHIKI_OMEGA_STORE,
  ZASHIKI_OMEGA_QUERY
} from '../../actions/stages/omega-stage'

const {
  PENDING
} = Steam
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
export default function zashikiOmegaReducer (state = STATE, { type, r: { data } = {} } = ACTION) {
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
