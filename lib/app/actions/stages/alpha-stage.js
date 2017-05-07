/**
 * Zashiki/Alpha Actions
 */
import {
  request
} from '../../actions'

/**
 * Action Types
 */
export const ZASHIKI_ALPHA_CHANGE = 'ZASHIKI_ALPHA_CHANGE'
export const ZASHIKI_ALPHA_FETCH = 'ZASHIKI_ALPHA_FETCH'
export const ZASHIKI_ALPHA_STORE = 'ZASHIKI_ALPHA_STORE'
export const ZASHIKI_ALPHA_QUERY = 'ZASHIKI_ALPHA_QUERY'

/**
 * Action Creators
 */
export function changeRoute (route) {
  return {
    type: ZASHIKI_ALPHA_CHANGE,
    promise: () => request.patch('route-master/stages/change', route)
  }
}

function fetchRoute () {
  return {
    type: ZASHIKI_ALPHA_FETCH,
    promise: () => request.get('route-master/stages/fetch')
  }
}

function storeRoute (route) {
  return {
    type: ZASHIKI_ALPHA_STORE,
    promise: () => request.put('route-master/stages/store', route)
  }
}

function queryRoute () {
  return {
    type: ZASHIKI_ALPHA_QUERY,
    promise: () => request.get('route-master/stages/query')
  }
}

export function fetch (resource) {
  return (dispatch) => (
    dispatch(fetchRoute({ resource }))
  )
}

export function store (resource, response) {
  return (dispatch) => (
    dispatch(storeRoute({ resource, response }))
  )
  .then(() => (
    dispatch(queryRoute()))
  )
}
