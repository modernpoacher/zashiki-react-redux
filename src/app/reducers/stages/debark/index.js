import {
  Signals
} from 'shinkansen-signals'

import {
  ZASHIKI_DEBARK_FETCH,
  ZASHIKI_DEBARK_STORE,
  ZASHIKI_DEBARK
} from 'zashiki-react-redux/app/actions/stages/debark'

const {
  PENDING,
  COMPLETE
} = Signals
const STATE = {
  status: PENDING
}
const ACTION = {}

const FETCH = `${ZASHIKI_DEBARK_FETCH}_FULFILLED`
const STORE = `${ZASHIKI_DEBARK_STORE}_FULFILLED`
const DEBARK = `${ZASHIKI_DEBARK}_FULFILLED`

/**
 *  DebarkStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function debarkReducer (state = STATE, { type, payload: { data } = {} } = ACTION) {
  switch (type) {
    case FETCH:
      return { ...data }

    case STORE:
      return { ...data }

    case DEBARK:
      return {
        status: COMPLETE,
        ...data
      }

    default:
      return state
  }
}
