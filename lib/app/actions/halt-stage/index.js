/**
 * HaltStage Actions
 */
import {
  request
} from '../../actions'

/**
 * Action Types
 */
export const HALT_STAGE_FETCH = 'HALT_STAGE_FETCH'
export const HALT_STAGE_STORE = 'HALT_STAGE_STORE'

/**
 * Action Creators
 */
export function fetch () {
  return {
    type: HALT_STAGE_FETCH,
    promise: () => request.get('halt-stage-fetch')
  }
}

export function store (values) {
  return {
    type: HALT_STAGE_STORE,
    promise: () => request.put('halt-stage-store', values)
  }
}
