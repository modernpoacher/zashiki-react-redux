import {
  ROUTE_MASTER_EMBARK_FETCH,
  ROUTE_MASTER_EMBARK_STORE,
  ROUTE_MASTER_EMBARK
} from '../../actions/embark-stage'

const PENDING = 100
const STATE = {
  status: PENDING
}

/**
 *  EmbarkStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function embarkReducer (state = STATE, action) {
  switch (action.type) {
    case ROUTE_MASTER_EMBARK_FETCH:
      return { ...action.r.data }

    case ROUTE_MASTER_EMBARK_STORE:
      return { ...action.r.data }

    case ROUTE_MASTER_EMBARK:
      return { status: 5, ...action.r.data }

    default:
      return state
  }
}
