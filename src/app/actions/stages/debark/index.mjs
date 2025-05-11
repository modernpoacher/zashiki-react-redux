import debug from '#zashiki-react-redux/debug'

/*
 *  DebarkStage Actions
 */
import Pantograph from 'shinkansen-engine/components/pantograph'

const log = debug('zashiki-react-redux/app/actions/stages/debark')

log('`zashiki` is awake')

const {
  ROUTE = 'DEBARK_ROUTE',
  FETCH = 'DEBARK_FETCH',
  STORE = 'DEBARK_STORE',
  SUBMIT = 'DEBARK_SUBMIT'
} = Pantograph.DEBARK

/*
 *  Action Types
 */
export {
  ROUTE,
  FETCH,
  STORE,
  SUBMIT
}

export const FETCH_FULFILLED = FETCH.concat('_FULFILLED')
export const STORE_FULFILLED = STORE.concat('_FULFILLED')
export const SUBMIT_FULFILLED = SUBMIT.concat('_FULFILLED')

export const FETCH_REJECTED = FETCH.concat('_REJECTED')
export const STORE_REJECTED = STORE.concat('_REJECTED')
export const SUBMIT_REJECTED = SUBMIT.concat('_REJECTED')

/*
 *  Action Creators
 */
export function debarkRoute (redirect, router) {
  /*
   *  log('debarkRoute')
   */

  return {
    type: ROUTE,
    redirect,
    router
  }
}

export function fetchRoute (router) {
  /*
   *  log('fetchRoute')
   */

  return {
    type: FETCH,
    router
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

export function submitState (debark, router) {
  /*
   *  log('submitState')
   */

  return {
    type: SUBMIT,
    debark,
    router
  }
}

export function submitStateFulfilled (response) {
  /*
   *  log('submitStateFulfilled')
   */

  return {
    type: SUBMIT_FULFILLED,
    response
  }
}

export function submitStateRejected (error) {
  /*
   *  log('submitStateRejected')
   */

  return {
    type: SUBMIT_REJECTED,
    error
  }
}

export const fetch = (router) => fetchRoute(router)

export const store = (response, router) => storeRoute({ response }, router)

export const submit = (debark, router) => submitState(debark, router)
