import debug from '#zashiki-react-redux/debug'

const log = debug('zashiki-react-redux/app/actions/zashiki')

log('`zashiki` is awake')

/*
 *  Zashiki Actions
 */

/*
 *  Action Types
 */
export const ERROR = 'ZASHIKI_ERROR'
export const MOUNT = 'ZASHIKI_MOUNT'
export const FETCH = 'ZASHIKI_FETCH'
export const STORE = 'ZASHIKI_STORE'
export const QUERY = 'ZASHIKI_QUERY'
export const CHANGE = 'ZASHIKI_CHANGE'
export const SUBMIT = 'ZASHIKI_SUBMIT'

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

export function mountRoute (route, router) {
  /*
   *  log('mountRoute')
   */

  return {
    type: MOUNT,
    route,
    router
  }
}

export function mountRouteFulfilled (response) {
  /*
   *  log('mountRouteFulfilled')
   */

  return {
    type: MOUNT_FULFILLED,
    response
  }
}

export function mountRouteRejected (error) {
  /*
   *  log('mountRouteRejected')
   */

  return {
    type: MOUNT_REJECTED,
    error
  }
}

export function fetchRoute () {
  /*
   *  log('fetchRoute')
   */

  return {
    type: FETCH
  }
}

export function fetchRouteFulfilled (response) {
  /*
   *  log('fetchRouteFulfilled')
   */

  return {
    type: FETCH_FULFILLED,
    response
  }
}

export function fetchRouteRejected (error) {
  /*
   *  log('fetchRouteRejected')
   */

  return {
    type: FETCH_REJECTED,
    error
  }
}

export function storeRoute (route, router) {
  /*
   *  log('storeRoute')
   */

  return {
    type: STORE,
    route,
    router
  }
}

export function storeRouteFulfilled (response) {
  /*
   *  log('storeRouteFulfilled')
   */

  return {
    type: STORE_FULFILLED,
    response
  }
}

export function storeRouteRejected (error) {
  /*
   *  log('storeRouteRejected')
   */

  return {
    type: STORE_REJECTED,
    error
  }
}

export function queryRoute () {
  /*
   *  log('queryRoute')
   */

  return {
    type: QUERY
  }
}

export function queryRouteFulfilled (response) {
  /*
   *  log('queryRouteFulfilled')
   */

  return {
    type: QUERY_FULFILLED,
    response
  }
}

export function queryRouteRejected (error) {
  /*
   *  log('queryRouteRejected')
   */

  return {
    type: QUERY_REJECTED,
    error
  }
}

export function changeRoute (route, router) {
  /*
   *  log('changeRoute')
   */

  return {
    type: CHANGE,
    route,
    router
  }
}

export function changeRouteFulfilled (response) {
  /*
   *  log('changeRouteFulfilled')
   */

  return {
    type: CHANGE_FULFILLED,
    response
  }
}

export function changeRouteRejected (error) {
  /*
   *  log('changeRouteRejected')
   */

  return {
    type: CHANGE_REJECTED,
    error
  }
}

export function submitRoute (route, router) {
  /*
   *  log('submitRoute')
   */

  return {
    type: SUBMIT,
    route,
    router
  }
}

export function submitRouteFulfilled (response) {
  /*
   *  log('submitRouteFulfilled')
   */

  return {
    type: SUBMIT_FULFILLED,
    response
  }
}

export function submitRouteRejected (error) {
  /*
   *  log('submitRouteRejected')
   */

  return {
    type: SUBMIT_REJECTED,
    error
  }
}

export const mount = (resource, router) => mountRoute({ resource }, router)

export const fetch = () => fetchRoute()

export const store = (resource, response, router) => storeRoute({ resource, response }, router)

export const change = (resource, router) => changeRoute({ resource }, router)

export const submit = (resource, response, router) => submitRoute({ resource, response }, router)
