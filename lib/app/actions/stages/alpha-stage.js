/**
 * RouteMaster/Alpha Actions
 */
import {
  request
} from '../../actions'

/**
 * Action Types
 */
export const ROUTE_MASTER_ALPHA_CHANGE = 'ROUTE_MASTER_ALPHA_CHANGE'
export const ROUTE_MASTER_ALPHA_FETCH = 'ROUTE_MASTER_ALPHA_FETCH'
export const ROUTE_MASTER_ALPHA_STORE = 'ROUTE_MASTER_ALPHA_STORE'
export const ROUTE_MASTER_ALPHA_QUERY = 'ROUTE_MASTER_ALPHA_QUERY'

/**
 * Action Creators
 */
export function changeRoute (route) {
  return {
    type: ROUTE_MASTER_ALPHA_CHANGE,
    promise: () => request.patch('route-master/change', route)
  }
}

function fetchRoute () {
  return {
    type: ROUTE_MASTER_ALPHA_FETCH,
    promise: () => request.get('route-master/fetch')
  }
}

function storeRoute (route) {
  return {
    type: ROUTE_MASTER_ALPHA_STORE,
    promise: () => request.put('route-master/store', route)
  }
}

function queryRoute () {
  return {
    type: ROUTE_MASTER_ALPHA_QUERY,
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
