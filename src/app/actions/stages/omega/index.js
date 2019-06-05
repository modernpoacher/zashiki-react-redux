/**
 * Zashiki/Omega Actions
 */
import {
  Pantograph
} from 'shinkansen-pantograph'

import {
  request
} from '@modernpoacher/zashiki-react-redux/app/actions'

const {
  ERROR: ZASHIKI_OMEGA_ERROR,
  CHANGE: ZASHIKI_OMEGA_CHANGE,
  FETCH: ZASHIKI_OMEGA_FETCH,
  STORE: ZASHIKI_OMEGA_STORE,
  QUERY: ZASHIKI_OMEGA_QUERY
} = Pantograph.OMEGA

/**
 * Action Types
 */
export {
  ZASHIKI_OMEGA_ERROR,
  ZASHIKI_OMEGA_CHANGE,
  ZASHIKI_OMEGA_FETCH,
  ZASHIKI_OMEGA_STORE,
  ZASHIKI_OMEGA_QUERY
}

/**
 * Action Creators
 */
function routeError (error) {
  return {
    type: ZASHIKI_OMEGA_ERROR,
    error
  }
}

function changeRoute (route) {
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

export const change = (resource) => async (dispatch) => {
  try {
    await dispatch(changeRoute({ resource }))
  } catch (e) {
    await dispatch(routeError(e))
  }
}

export const fetch = (resource) => async (dispatch) => {
  try {
    await dispatch(fetchRoute({ resource }))
  } catch (e) {
    await dispatch(routeError(e))
  }
}

export const store = (resource, response) => async (dispatch) => {
  try {
    await dispatch(storeRoute({ resource, response }))
  } catch (e) {
    await dispatch(routeError(e))
  }
}

export const query = () => async (dispatch) => {
  try {
    await dispatch(queryRoute())
  } catch (e) {
    await dispatch(routeError(e))
  }
}

export const submit = (resource, response) => async (dispatch) => {
  try {
    await dispatch(storeRoute({ resource, response }))
    await dispatch(queryRoute())
  } catch (e) {
    await dispatch(routeError(e))
  }
}
