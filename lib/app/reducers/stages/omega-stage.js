import {
  ROUTE_MASTER_OMEGA_CHANGE,
  ROUTE_MASTER_OMEGA_FETCH,
  ROUTE_MASTER_OMEGA_STORE,
  ROUTE_MASTER_OMEGA_QUERY
} from '../../actions/stages/omega-stage'

const PENDING = 100
const STATE = {
  status: PENDING
}
const ACTION = {}

/**
 *  RouteMaster/Omega Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function routeMasterOmegaReducer (state = STATE, { type, r: { data } = {} } = ACTION) {
  switch (type) {
    case ROUTE_MASTER_OMEGA_CHANGE:
      return { ...data }

    case ROUTE_MASTER_OMEGA_FETCH:
      return { ...data }

    case ROUTE_MASTER_OMEGA_STORE:
      return { ...data }

    case ROUTE_MASTER_OMEGA_QUERY:
      return { ...data }

    default:
      return state
  }
}
