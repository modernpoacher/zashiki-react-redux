/**
 * Zashiki Actions
 */
import {
  request
} from 'zashiki-react-redux/app/actions'

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
    payload: {
      promise: request.patch('zashiki/stages/change', route)
    }
  }
}

function fetchRoute () {
  return {
    type: ZASHIKI_FETCH,
    payload: {
      promise: request.get('zashiki/stages/fetch')
    }
  }
}

function storeRoute (route) {
  return {
    type: ZASHIKI_STORE,
    payload: {
      promise: request.put('zashiki/stages/store', route)
    }
  }
}

function queryRoute () {
  return {
    type: ZASHIKI_QUERY,
    payload: {
      promise: request.get('zashiki/stages/query')
    }
  }
}

export const fetch = (resource) => (dispatch) => dispatch(fetchRoute({ resource }))

export const store = (resource, response) => (dispatch) => dispatch(storeRoute({ resource, response }))
  .then(() => dispatch(queryRoute()))
