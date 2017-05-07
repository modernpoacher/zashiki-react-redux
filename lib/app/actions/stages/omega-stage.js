/**
 * Zashiki/Omega Actions
 */
import {
  request
} from '../../actions'

/**
 * Action Types
 */
export const ZASHIKI_OMEGA_CHANGE = 'ZASHIKI_OMEGA_CHANGE'
export const ZASHIKI_OMEGA_FETCH = 'ZASHIKI_OMEGA_FETCH'
export const ZASHIKI_OMEGA_STORE = 'ZASHIKI_OMEGA_STORE'
export const ZASHIKI_OMEGA_QUERY = 'ZASHIKI_OMEGA_QUERY'

/**
 * Action Creators
 */
export function changeRoute (route) {
  return {
    type: ZASHIKI_OMEGA_CHANGE,
    promise: () => request.patch('route-master/stages/change', route)
  }
}

function fetchRoute () {
  return {
    type: ZASHIKI_OMEGA_FETCH,
    promise: () => request.get('route-master/stages/fetch')
  }
}

function storeRoute (route) {
  return {
    type: ZASHIKI_OMEGA_STORE,
    promise: () => request.put('route-master/stages/store', route)
  }
}

function queryRoute () {
  return {
    type: ZASHIKI_OMEGA_QUERY,
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
