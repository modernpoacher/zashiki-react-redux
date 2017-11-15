import {
  Signals
} from 'shinkansen-signals'

import {
  ZASHIKI_OMEGA_CHANGE,
  ZASHIKI_OMEGA_FETCH,
  ZASHIKI_OMEGA_STORE,
  ZASHIKI_OMEGA_QUERY
} from 'zashiki-react-redux/app/actions/stages/omega'

const {
  PENDING
} = Signals
const STATE = {
  status: PENDING
}
const ACTION = {}

const CHANGE = `${ZASHIKI_OMEGA_CHANGE}_FULFILLED`
const FETCH = `${ZASHIKI_OMEGA_FETCH}_FULFILLED`
const STORE = `${ZASHIKI_OMEGA_STORE}_FULFILLED`
const QUERY = `${ZASHIKI_OMEGA_QUERY}_FULFILLED`

/**
 *  Zashiki/Omega Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function omegaReducer (state = STATE, { type, payload: { data } = {} } = ACTION) {
  switch (type) {
    case CHANGE:
      return { ...data }

    case FETCH:
      return { ...data }

    case STORE:
      return { ...data }

    case QUERY:
      return { ...data }

    default:
      return state
  }
}
