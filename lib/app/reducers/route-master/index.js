import {
  CHANGE_ROUTE,
  FETCH_ROUTE,
  STORE_ROUTE,
  LIST_ROUTES
} from '../../actions/route-master'

const transform = ({
  gears,
  state,
  resource,
  definition: schema,
  response: formData
}) => schema ? { gears, state, resource, definition: { schema, formData } } : { gears, state, resource }

const transformList = ({
  resource,
  definition: schema,
  response: formData
}) => schema ? { resource, definition: { schema, formData } } : { resource }

/**
 *  RouteMaster Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function routeMasterReducer (state = {}, action) {
  switch (action.type) {
    case CHANGE_ROUTE: // console.log('CHANGE_ROUTE', CHANGE_ROUTE)
      return transform(action.r.data)
    case FETCH_ROUTE: // console.log('FETCH_ROUTE', FETCH_ROUTE)
      return { ...action.r.data }
    case STORE_ROUTE: // console.log('STORE_ROUTE', STORE_ROUTE)
      return { ...action.r.data }
    case LIST_ROUTES: // console.log('LIST_ROUTES', LIST_ROUTES)
      return transformList(action.r.data)
    default: // console.log(action.type)
      return state
  }
}
