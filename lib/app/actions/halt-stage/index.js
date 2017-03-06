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
export const HALT_STAGE_EMBARK = 'HALT_STAGE_EMBARK'
export const HALT_STAGE_DEBARK = 'HALT_STAGE_DEBARK'

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

export function embark (values) {
  return {
    type: HALT_STAGE_EMBARK,
    promise: () => request.post('route-master-embark', values)
  }
}

export function debark (values) {
  return {
    type: HALT_STAGE_DEBARK,
    promise: () => request.post('route-master-debark', values)
  }
}
