/**
 * Zashiki Actions
 */
import {
  request
} from '../../actions'

/**
 * Action Types
 */
export const ZASHIKI_CHANGE = 'ZASHIKI_CHANGE'
export const ZASHIKI_FETCH = 'ZASHIKI_FETCH'
export const ZASHIKI_STORE = 'ZASHIKI_STORE'
export const ZASHIKI_QUERY = 'ZASHIKI_QUERY'

/**
 * Action Creators
 */
export function changeRoute (route) {
  return {
    type: ZASHIKI_CHANGE,
    promise: () => request.patch('zashiki/stages/change', route)
  }
}

function fetchRoute () {
  return {
    type: ZASHIKI_FETCH,
    promise: () => request.get('zashiki/stages/fetch')
  }
}

function storeRoute (route) {
  return {
    type: ZASHIKI_STORE,
    promise: () => request.put('zashiki/stages/store', route)
  }
}

function queryRoute () {
  return {
    type: ZASHIKI_QUERY,
    promise: () => request.get('zashiki/stages/query')
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
