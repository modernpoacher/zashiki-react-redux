import {
  Signals
} from 'shinkansen-signals'

import {
  ZASHIKI_CHANGE,
  ZASHIKI_FETCH,
  ZASHIKI_STORE,
  ZASHIKI_QUERY
} from 'zashiki-react-redux/app/actions/zashiki'

const {
  PENDING
} = Signals
const STATE = {
  status: PENDING
}
const ACTION = {}

const CHANGE = `${ZASHIKI_CHANGE}_FULFILLED`
const FETCH = `${ZASHIKI_FETCH}_FULFILLED`
const STORE = `${ZASHIKI_STORE}_FULFILLED`
const QUERY = `${ZASHIKI_QUERY}_FULFILLED`

/**
 *  Zashiki Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function zashikiReducer (state = STATE, { type, payload: { data } = {} } = ACTION) {
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
