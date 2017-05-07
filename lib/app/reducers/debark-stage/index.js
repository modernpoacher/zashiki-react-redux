import {
  ZASHIKI_DEBARK_FETCH,
  ZASHIKI_DEBARK_STORE,
  ZASHIKI_DEBARK
} from '../../actions/debark-stage'

const PENDING = 100
const STATE = {
  status: PENDING
}
const ACTION = {}

/**
 *  DebarkStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function debarkReducer (state = STATE, { type, r: { data } = {} } = ACTION) {
  switch (type) {
    case ZASHIKI_DEBARK_FETCH:
      return { ...data }

    case ZASHIKI_DEBARK_STORE:
      return { ...data }

    case ZASHIKI_DEBARK:
      return { status: 5, ...data }

    default:
      return state
  }
}
