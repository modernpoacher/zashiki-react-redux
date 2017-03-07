import {
  ROUTE_MASTER_EMBARK_FETCH,
  ROUTE_MASTER_EMBARK_STORE,

  ROUTE_MASTER_EMBARK,
  ROUTE_MASTER_DEBARK
} from '../../actions/list-stage'

const PENDING = 100
const STATE = {
  status: PENDING
}

const transform = ({
  status,
  resource,
  definition: schema,
  response: formData
}) => (
  (schema)
    ? { status, resource, definition: { schema, formData } }
    : { status, resource }
)

/**
 *  EmbarkStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function embarkReducer (state = STATE, action) {
  switch (action.type) {
    case ROUTE_MASTER_EMBARK_FETCH: // console.log('ROUTE_MASTER_EMBARK_FETCH', ROUTE_MASTER_EMBARK_FETCH, action.r.data)
      return transform(action.r.data) // { ...action.r.data }

    case ROUTE_MASTER_EMBARK_STORE: // console.log('ROUTE_MASTER_EMBARK_STORE', ROUTE_MASTER_EMBARK_STORE, action.r.data)
      return transform(action.r.data) // { ...action.r.data }

    case ROUTE_MASTER_EMBARK: // console.log('ROUTE_MASTER_EMBARK', ROUTE_MASTER_EMBARK, action.r.data)
      return { status: 5, ...state, ...action.r.data }

    case ROUTE_MASTER_DEBARK: // console.log('ROUTE_MASTER_DEBARK', ROUTE_MASTER_DEBARK, action.r.data)
      return { status: 5, ...state, ...action.r.data }

    default:
      return state
  }
}
