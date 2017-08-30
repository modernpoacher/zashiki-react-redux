import {
  Signals
} from 'shinkansen-signals'

import {
  ZASHIKI_ALPHA_CHANGE,
  ZASHIKI_ALPHA_FETCH,
  ZASHIKI_ALPHA_STORE,
  ZASHIKI_ALPHA_QUERY
} from 'zashiki-react-redux/app/actions/stages/alpha-stage'

const {
  PENDING
} = Signals
const STATE = {
  status: PENDING
}
const ACTION = {}

const CHANGE = `${ZASHIKI_ALPHA_CHANGE}_FULFILLED`
const FETCH = `${ZASHIKI_ALPHA_FETCH}_FULFILLED`
const STORE = `${ZASHIKI_ALPHA_STORE}_FULFILLED`
const QUERY = `${ZASHIKI_ALPHA_QUERY}_FULFILLED`

/**
 *  Zashiki/Alpha Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function alphaReducer (state = STATE, { type, payload: { data } = {} } = ACTION) {
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
