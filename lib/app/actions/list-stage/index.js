/**
 * HaltStage Actions
 */
import {
  request
} from '../../actions'

/**
 * Action Types
 */
export const LIST_STAGE_FETCH = 'LIST_STAGE_FETCH'
export const LIST_STAGE_STORE = 'LIST_STAGE_STORE'

/**
 * Action Creators
 */
export function fetch () {
  return {
    type: LIST_STAGE_FETCH,
    promise: () => request.get('list-stage-fetch')
  }
}

export function store (values) {
  return {
    type: LIST_STAGE_STORE,
    promise: () => request.put('list-stage-store', values)
  }
}
