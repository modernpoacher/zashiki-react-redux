/**
 * RouteMaster Actions
 */
import {
  request
} from '../../actions'

/**
 * Action Types
 */
export const ROUTE_MASTER_CHANGE = 'ROUTE_MASTER_CHANGE'
export const ROUTE_MASTER_FETCH = 'ROUTE_MASTER_FETCH'
export const ROUTE_MASTER_STORE = 'ROUTE_MASTER_STORE'
export const ROUTE_MASTER_QUERY = 'ROUTE_MASTER_QUERY'

/**
 * Action Creators
 */
export function changeRoute (values) {
  return {
    type: ROUTE_MASTER_CHANGE,
    promise: () => request.patch('route-master-change', values)
  }
}

export function fetchRoute () {
  return {
    type: ROUTE_MASTER_FETCH,
    promise: () => request.get('route-master-fetch')
  }
}

export function storeRoute (values) {
  return {
    type: ROUTE_MASTER_STORE,
    promise: () => request.put('route-master-store', values)
  }
}

export function queryRoute () {
  return {
    type: ROUTE_MASTER_QUERY,
    promise: () => request.get('route-master-query')
  }
}
