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
export const LIST_STAGE_EMBARK = 'LIST_STAGE_EMBARK'
export const LIST_STAGE_DEBARK = 'LIST_STAGE_DEBARK'

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

export function embark (values) {
  return {
    type: LIST_STAGE_EMBARK,
    promise: () => request.post('route-master-embark', values)
  }
}

export function debark (values) {
  return {
    type: LIST_STAGE_DEBARK,
    promise: () => request.post('route-master-debark', values)
  }
}
