/**
 * Zashiki/Alpha Actions
 */
import {
  request
} from '@modernpoacher/zashiki-react-redux/app/actions'

import {
  Pantograph
} from 'shinkansen-pantograph'

const {
  ERROR: ZASHIKI_ALPHA_ERROR,
  CHANGE: ZASHIKI_ALPHA_CHANGE,
  FETCH: ZASHIKI_ALPHA_FETCH,
  STORE: ZASHIKI_ALPHA_STORE,
  QUERY: ZASHIKI_ALPHA_QUERY
} = Pantograph.ALPHA

/**
 * Action Types
 */
export {
  ZASHIKI_ALPHA_ERROR,
  ZASHIKI_ALPHA_CHANGE,
  ZASHIKI_ALPHA_FETCH,
  ZASHIKI_ALPHA_STORE,
  ZASHIKI_ALPHA_QUERY
}

/**
 * Action Creators
 */
function routeError (error) {
  return {
    type: ZASHIKI_ALPHA_ERROR,
    error
  }
}

function changeRoute (route) {
  return {
    type: ZASHIKI_ALPHA_CHANGE,
    payload: {
      promise: request.patch('zashiki/stages/change', route)
    }
  }
}

function fetchRoute () {
  return {
    type: ZASHIKI_ALPHA_FETCH,
    payload: {
      promise: request.get('zashiki/stages/fetch')
    }
  }
}

function storeRoute (route) {
  return {
    type: ZASHIKI_ALPHA_STORE,
    payload: {
      promise: request.put('zashiki/stages/store', route)
    }
  }
}

function queryRoute () {
  return {
    type: ZASHIKI_ALPHA_QUERY,
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

export const submit = (resource, response) => async (dispatch) => {
  try {
    await dispatch(storeRoute({ resource, response }))
    await dispatch(queryRoute())
  } catch (e) {
    await dispatch(routeError(e))
  }
}
