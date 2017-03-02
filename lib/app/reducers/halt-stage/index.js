import {
  HALT_STAGE_FETCH,
  HALT_STAGE_STORE
} from '../../actions/halt-stage'

const PENDING = 5
const STATE = {
  status: PENDING
}

const transform = (stage) => ({ ...stage })

/**
 *  HaltStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function haltStageReducer (state = STATE, action) {
  switch (action.type) {
    case HALT_STAGE_FETCH: // console.log('HALT_STAGE_FETCH', HALT_STAGE_FETCH, action.r.data)
      return transform(action.r.data) // { ...action.r.data }

    case HALT_STAGE_STORE: // console.log('HALT_STAGE_STORE', HALT_STAGE_STORE, action.r.data)
      return transform(action.r.data) // { ...action.r.data }

    default:
      return state
  }
}
