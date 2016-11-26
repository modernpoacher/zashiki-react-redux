import {
  CHANGE_ROUTE
} from '../../actions/route-master'

/**
 * RouteMaster Reducer
 *
 * @param {Object} state Initial state
 * @param {Object} action
 */
export default function routeMasterReducer (state = {}, action) {
  switch (action.type) {
    case CHANGE_ROUTE:
      return { ...action.r.data }
    default:
      return state
  }
}
