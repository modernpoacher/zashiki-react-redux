/**
 * RouteMaster Actions
 */
import {
  request
} from '../../actions'

/**
 * Action Types
 */
export const CHANGE_ROUTE = 'CHANGE_ROUTE'
export const FETCH_ROUTE = 'FETCH_ROUTE'
export const STORE_ROUTE = 'STORE_ROUTE'
export const FETCH_LIST = 'FETCH_LIST'
export const STORE_LIST = 'STORE_LIST'

/**
 * Action Creators
 */
export function changeRoute (values) {
  return {
    type: CHANGE_ROUTE,
    promise: () => request.patch('route-master-change', values)
  }
}

export function fetchRoute () {
  return {
    type: FETCH_ROUTE,
    promise: () => request.get('route-master-fetch')
  }
}

export function storeRoute (values) {
  return {
    type: STORE_ROUTE,
    promise: () => request.put('route-master-store', values)
  }
}

export function fetchList () {
  return {
    type: FETCH_LIST,
    promise: () => request.get('route-master-fetch-list')
  }
}

export function storeList (values) {
  return {
    type: STORE_LIST,
    promise: () => request.put('route-master-store-list', values)
  }
}
