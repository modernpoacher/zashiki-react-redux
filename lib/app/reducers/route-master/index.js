import {
  ROUTE_MASTER_CHANGE,
  ROUTE_MASTER_FETCH,
  ROUTE_MASTER_STORE,
  ROUTE_MASTER_QUERY
} from '../../actions/route-master'

const PENDING = 100
const STATE = {
  status: PENDING
}

/**
 *  RouteMaster Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function routeMasterReducer (state = STATE, action) {
  switch (action.type) {
    case ROUTE_MASTER_CHANGE:
      return { ...action.r.data }

    case ROUTE_MASTER_FETCH:
      return { ...action.r.data }

    case ROUTE_MASTER_STORE:
      return { ...action.r.data }

    case ROUTE_MASTER_QUERY:
      return { ...action.r.data }

    default:
      return state
  }
}
