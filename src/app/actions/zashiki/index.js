/**
 * Zashiki Actions
 */
import {
  request
} from '@modernpoacher/zashiki-react-redux/app/actions'

/**
 * Action Types
 */
export const ZASHIKI_ERROR = 'ZASHIKI_ERROR'
export const ZASHIKI_CHANGE = 'ZASHIKI_CHANGE'
export const ZASHIKI_FETCH = 'ZASHIKI_FETCH'
export const ZASHIKI_STORE = 'ZASHIKI_STORE'
export const ZASHIKI_QUERY = 'ZASHIKI_QUERY'

/**
 * Action Creators
 */
function routeError (error) {
  return {
    type: ZASHIKI_ERROR,
    error
  }
}

function changeRoute (route) {
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
