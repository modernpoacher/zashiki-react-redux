import {
  ROUTE_MASTER_DEBARK_FETCH,
  ROUTE_MASTER_DEBARK_STORE,
  ROUTE_MASTER_DEBARK
} from '../../actions/debark-stage'

const PENDING = 100
const STATE = {
  status: PENDING
}

/**
 *  DebarkStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function debarkReducer (state = STATE, action) {
  switch (action.type) {
    case ROUTE_MASTER_DEBARK_FETCH:
      return { ...action.r.data }

    case ROUTE_MASTER_DEBARK_STORE:
      return { ...action.r.data }

    case ROUTE_MASTER_DEBARK:
      return { status: 5, ...action.r.data }

    default:
      return state
  }
}
