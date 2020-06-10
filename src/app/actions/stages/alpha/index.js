import debug from 'debug'

/*
 *  Zashiki/Alpha Actions
 */
import Pantograph from 'shinkansen-engine/lib/components/pantograph'

const log = debug('zashiki-react-redux:app:actions:stages:alpha')

const {
  ROUTE = 'ALPHA_ROUTE',
  MOUNT = 'ALPHA_MOUNT',
  FETCH = 'ALPHA_FETCH',
  STORE = 'ALPHA_STORE',
  QUERY = 'ALPHA_QUERY',
  CHANGE = 'ALPHA_CHANGE',
  SUBMIT = 'ALPHA_SUBMIT'
} = Pantograph.ALPHA

/*
 *  Action Types
 */
export {
  ROUTE,
  MOUNT,
  FETCH,
  STORE,
  QUERY,
  CHANGE,
  SUBMIT
}

export const MOUNT_FULFILLED = MOUNT.concat('_FULFILLED')
export const FETCH_FULFILLED = FETCH.concat('_FULFILLED')
export const STORE_FULFILLED = STORE.concat('_FULFILLED')
export const QUERY_FULFILLED = QUERY.concat('_FULFILLED')
export const CHANGE_FULFILLED = CHANGE.concat('_FULFILLED')
export const SUBMIT_FULFILLED = SUBMIT.concat('_FULFILLED')

export const MOUNT_REJECTED = MOUNT.concat('_REJECTED')
export const FETCH_REJECTED = FETCH.concat('_REJECTED')
export const STORE_REJECTED = STORE.concat('_REJECTED')
export const QUERY_REJECTED = QUERY.concat('_REJECTED')
export const CHANGE_REJECTED = CHANGE.concat('_REJECTED')
export const SUBMIT_REJECTED = SUBMIT.concat('_REJECTED')

/*
 *  Action Creators
 */
export function alphaRoute (redirect, history) {
  log('alphaRoute')

  return {
    type: ROUTE,
    redirect,
    history
  }
}

export function mountRoute (route, history) {
  log('mountRoute')

  return {
    type: MOUNT,
    route,
    history
  }
}

export function mountRouteFulfilled (response) {
  log('mountRouteFulfilled')

  return {
    type: MOUNT_FULFILLED,
    response
  }
}

export function mountRouteRejected (error) {
  log('mountRouteRejected')

  return {
    type: MOUNT_REJECTED,
    error
  }
}

export function fetchRoute () {
  log('fetchRoute')

  return {
    type: FETCH
  }
}

export function fetchRouteFulfilled (response) {
  log('fetchRouteFulfilled')

  return {
    type: FETCH_FULFILLED,
    response
  }
}

export function fetchRouteRejected (error) {
  log('fetchRouteRejected')

  return {
    type: FETCH_REJECTED,
    error
  }
}

export function storeRoute (route, history) {
  log('storeRoute')

  return {
    type: STORE,
    route,
    history
  }
}

export function storeRouteFulfilled (response) {
  log('storeRouteFulfilled')

  return {
    type: STORE_FULFILLED,
    response
  }
}

export function storeRouteRejected (error) {
  log('storeRouteRejected')

  return {
    type: STORE_REJECTED,
    error
  }
}

export function queryRoute () {
  log('queryRoute')

  return {
    type: QUERY
  }
}

export function queryRouteFulfilled (response) {
  log('queryRouteFulfilled')

  return {
    type: QUERY_FULFILLED,
    response
  }
}

export function queryRouteRejected (error) {
  log('queryRouteRejected')

  return {
    type: QUERY_REJECTED,
    error
  }
}

export function changeRoute (route, history) {
  log('changeRoute')

  return {
    type: CHANGE,
    route,
    history
  }
}

export function changeRouteFulfilled (response) {
  log('changeRouteFulfilled')

  return {
    type: CHANGE_FULFILLED,
    response
  }
}

export function changeRouteRejected (error) {
  log('changeRouteRejected')

  return {
    type: CHANGE_REJECTED,
    error
  }
}

export function submitRoute (route, history) {
  log('submitRoute')

  return {
    type: SUBMIT,
    route,
    history
  }
}

export function submitRouteFulfilled (response) {
  log('submitRouteFulfilled')

  return {
    type: SUBMIT_FULFILLED,
    response
  }
}

export function submitRouteRejected (error) {
  log('submitRouteRejected')

  return {
    type: SUBMIT_REJECTED,
    error
  }
}

export const mount = (resource, history) => mountRoute({ resource }, history)

export const fetch = () => fetchRoute()

export const store = (resource, response, history) => storeRoute({ resource, response }, history)

export const change = (resource, history) => changeRoute({ resource }, history)

export const submit = (resource, response, history) => submitRoute({ resource, response }, history)
