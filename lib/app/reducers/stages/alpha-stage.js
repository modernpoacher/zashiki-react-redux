import {
  ROUTE_MASTER_ALPHA_CHANGE,
  ROUTE_MASTER_ALPHA_FETCH,
  ROUTE_MASTER_ALPHA_STORE,
  ROUTE_MASTER_ALPHA_QUERY
} from '../../actions/stages/alpha-stage'

const PENDING = 100
const STATE = {
  status: PENDING
}
const ACTION = {}

/**
 *  RouteMaster/Alpha Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function routeMasterAlphaReducer (state = STATE, { type, r: { data } = {} } = ACTION) {
  switch (type) {
    case ROUTE_MASTER_ALPHA_CHANGE:
      return { ...data }

    case ROUTE_MASTER_ALPHA_FETCH:
      return { ...data }

    case ROUTE_MASTER_ALPHA_STORE:
      return { ...data }

    case ROUTE_MASTER_ALPHA_QUERY:
      return { ...data }

    default:
      return state
  }
}
