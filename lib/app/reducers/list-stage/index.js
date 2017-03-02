import {
  LIST_STAGE_FETCH,
  LIST_STAGE_STORE
} from '../../actions/list-stage'

const PENDING = 5
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
 *  ListStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function listStageReducer (state = STATE, action) {
  switch (action.type) {
    case LIST_STAGE_FETCH: // console.log('LIST_STAGE_FETCH', LIST_STAGE_FETCH, action.r.data)
      return transform(action.r.data) // { ...action.r.data }

    case LIST_STAGE_STORE: // console.log('LIST_STAGE_STORE', LIST_STAGE_STORE, action.r.data)
      return transform(action.r.data) // { ...action.r.data }

    default:
      return state
  }
}
