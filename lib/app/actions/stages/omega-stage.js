/**
 * RouteMaster/Omega Actions
 */
import {
  request
} from '../../actions'

/**
 * Action Types
 */
export const ROUTE_MASTER_OMEGA_CHANGE = 'ROUTE_MASTER_OMEGA_CHANGE'
export const ROUTE_MASTER_OMEGA_FETCH = 'ROUTE_MASTER_OMEGA_FETCH'
export const ROUTE_MASTER_OMEGA_STORE = 'ROUTE_MASTER_OMEGA_STORE'
export const ROUTE_MASTER_OMEGA_QUERY = 'ROUTE_MASTER_OMEGA_QUERY'

/**
 * Action Creators
 */
export function changeRoute (route) {
  return {
    type: ROUTE_MASTER_OMEGA_CHANGE,
    promise: () => request.patch('route-master/change', route)
  }
}

function fetchRoute () {
  return {
    type: ROUTE_MASTER_OMEGA_FETCH,
    promise: () => request.get('route-master/fetch')
  }
}

function storeRoute (route) {
  return {
    type: ROUTE_MASTER_OMEGA_STORE,
    promise: () => request.put('route-master/store', route)
  }
}

function queryRoute () {
  return {
    type: ROUTE_MASTER_OMEGA_QUERY,
    promise: () => request.get('route-master/query')
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
