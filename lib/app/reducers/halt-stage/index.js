import {
  ROUTE_MASTER_DEBARK_FETCH,
  ROUTE_MASTER_DEBARK_STORE
} from '../../actions/halt-stage'

const PENDING = 100
const STATE = {
  status: PENDING
}

const transform = (stage) => ({ ...stage })

/**
 *  DebarkStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function debarkReducer (state = STATE, action) {
  switch (action.type) {
    case ROUTE_MASTER_DEBARK_FETCH: // console.log('ROUTE_MASTER_DEBARK_FETCH', ROUTE_MASTER_DEBARK_FETCH, action.r.data)
      return transform(action.r.data) // { ...action.r.data }

    case ROUTE_MASTER_DEBARK_STORE: // console.log('ROUTE_MASTER_DEBARK_STORE', ROUTE_MASTER_DEBARK_STORE, action.r.data)
      return transform(action.r.data) // { ...action.r.data }

    default:
      return state
  }
}
