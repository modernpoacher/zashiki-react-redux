/**
 * Zashiki/Alpha Actions
 */
import {
  request
} from '../../../actions'

import {
  Pantograph
} from 'shinkansen-pantograph'

const {
  CHANGE: ZASHIKI_ALPHA_CHANGE,
  FETCH: ZASHIKI_ALPHA_FETCH,
  STORE: ZASHIKI_ALPHA_STORE,
  QUERY: ZASHIKI_ALPHA_QUERY
} = Pantograph.ALPHA

/**
 * Action Types
 */
export {
  ZASHIKI_ALPHA_CHANGE,
  ZASHIKI_ALPHA_FETCH,
  ZASHIKI_ALPHA_STORE,
  ZASHIKI_ALPHA_QUERY
}

/**
 * Action Creators
 */
export function changeRoute (route) {
  return {
    type: ZASHIKI_ALPHA_CHANGE,
    promise: () => request.patch('zashiki/stages/change', route)
  }
}

function fetchRoute () {
  return {
    type: ZASHIKI_ALPHA_FETCH,
    promise: () => request.get('zashiki/stages/fetch')
  }
}

function storeRoute (route) {
  return {
    type: ZASHIKI_ALPHA_STORE,
    promise: () => request.put('zashiki/stages/store', route)
  }
}

function queryRoute () {
  return {
    type: ZASHIKI_ALPHA_QUERY,
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
