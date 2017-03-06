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

const transform = ({
  status,
  gears,
  state,
  resource,
  definition: schema,
  response: formData
}) => (
  (schema)
    ? { status, gears, state, resource, definition: { schema, formData } }
    : { status, gears, state, resource }
)

/**
 *  RouteMaster Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function routeMasterReducer (state = STATE, action) {
  switch (action.type) {
    case ROUTE_MASTER_CHANGE: // console.log('ROUTE_MASTER_CHANGE', ROUTE_MASTER_CHANGE, action.r.data)
      return transform(action.r.data) // { ...action.r.data }

    case ROUTE_MASTER_FETCH: // console.log('ROUTE_MASTER_FETCH', ROUTE_MASTER_FETCH, action.r.data)
      return transform(action.r.data)  // { ...action.r.data }

    case ROUTE_MASTER_STORE: // console.log('ROUTE_MASTER_STORE', ROUTE_MASTER_STORE, action.r.data)
      return transform(action.r.data) // { ...action.r.data }

    case ROUTE_MASTER_QUERY: // console.log('ROUTE_MASTER_STORE', ROUTE_MASTER_STORE, action.r.data)
      return { ...state, ...action.r.data }

    default:
      return state
  }
}
