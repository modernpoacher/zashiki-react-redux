/**
 * Zashiki/Omega Actions
 */
import {
  request
} from '../../../actions'

import {
  Pantograph
} from 'shinkansen-pantograph'

const {
  CHANGE: ZASHIKI_OMEGA_CHANGE,
  FETCH: ZASHIKI_OMEGA_FETCH,
  STORE: ZASHIKI_OMEGA_STORE,
  QUERY: ZASHIKI_OMEGA_QUERY
} = Pantograph.OMEGA

/**
 * Action Types
 */
export {
  ZASHIKI_OMEGA_CHANGE,
  ZASHIKI_OMEGA_FETCH,
  ZASHIKI_OMEGA_STORE,
  ZASHIKI_OMEGA_QUERY
}

/**
 * Action Creators
 */
export function changeRoute (route) {
  return {
    type: ZASHIKI_OMEGA_CHANGE,
    payload: {
      promise: request.patch('zashiki/stages/change', route)
    }
  }
}

function fetchRoute () {
  return {
    type: ZASHIKI_OMEGA_FETCH,
    payload: {
      promise: request.get('zashiki/stages/fetch')
    }
  }
}

function storeRoute (route) {
  return {
    type: ZASHIKI_OMEGA_STORE,
    payload: {
      promise: request.put('zashiki/stages/store', route)
    }
  }
}

function queryRoute () {
  return {
    type: ZASHIKI_OMEGA_QUERY,
    payload: {
      promise: request.get('zashiki/stages/query')
    }
  }
}

export const fetch = (resource) => (dispatch) => dispatch(fetchRoute({ resource }))

export const store = (resource, response) => (dispatch) => dispatch(storeRoute({ resource, response }))
  .then(() => dispatch(queryRoute()))
