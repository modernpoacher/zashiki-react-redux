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
    payload: request.patch('zashiki/stages/change', route)
  }
}

function fetchRoute () {
  return {
    type: ZASHIKI_ALPHA_FETCH,
    payload: request.get('zashiki/stages/fetch')
  }
}

function storeRoute (route) {
  return {
    type: ZASHIKI_ALPHA_STORE,
    payload: request.put('zashiki/stages/store', route)
  }
}

function queryRoute () {
  return {
    type: ZASHIKI_ALPHA_QUERY,
    payload: request.get('zashiki/stages/query')
  }
}

export const fetch = (resource) => (dispatch) => dispatch(fetchRoute({ resource }))

export const store = (resource, response) => (dispatch) => dispatch(storeRoute({ resource, response }))
  .then(() => dispatch(queryRoute()))
