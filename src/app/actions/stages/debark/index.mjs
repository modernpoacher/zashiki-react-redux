import debug from 'debug'

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
export function debarkRoute (redirect, history) {
  /*
   *  log('debarkRoute')
   */

  return {
    type: ROUTE,
    redirect,
    history
  }
}

export function fetchRoute (history) {
  /*
   *  log('fetchRoute')
   */

  return {
    type: FETCH,
    history
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

export function storeRoute (route, history) {
  /*
   *  log('storeRoute')
   */

  return {
    type: STORE,
    route,
    history
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

export function submitState (debark, history) {
  /*
   *  log('submitState')
   */

  return {
    type: SUBMIT,
    debark,
    history
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

export const fetch = (history) => fetchRoute(history)

export const store = (response, history) => storeRoute({ response }, history)

export const submit = (debark, history) => submitState(debark, history)
