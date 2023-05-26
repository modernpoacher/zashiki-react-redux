import debug from 'debug'

/*
 *  EmbarkStage Actions
 */
import Pantograph from 'shinkansen-engine/components/pantograph'

const log = debug('zashiki-react-redux/app/actions/stages/embark')

log('`zashiki` is awake')

const {
  ROUTE = 'EMBARK_ROUTE',
  FETCH = 'EMBARK_FETCH',
  STORE = 'EMBARK_STORE',
  CHANGE = 'EMBARK_CHANGE',
  SUBMIT = 'EMBARK_SUBMIT'
} = Pantograph.EMBARK

/*
 *  Action Types
 */
export {
  ROUTE,
  FETCH,
  STORE,
  CHANGE,
  SUBMIT
}

export const FETCH_FULFILLED = FETCH.concat('_FULFILLED')
export const STORE_FULFILLED = STORE.concat('_FULFILLED')
export const CHANGE_FULFILLED = CHANGE.concat('_FULFILLED')
export const SUBMIT_FULFILLED = SUBMIT.concat('_FULFILLED')

export const FETCH_REJECTED = FETCH.concat('_REJECTED')
export const STORE_REJECTED = STORE.concat('_REJECTED')
export const CHANGE_REJECTED = CHANGE.concat('_REJECTED')
export const SUBMIT_REJECTED = SUBMIT.concat('_REJECTED')

/*
 *  Action Creators
 */
export function embarkRoute (redirect, history) {
  /*
   *  log('embarkRoute')
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

export function changeState (embark, history) {
  /*
   *  log('changeState')
   */

  return {
    type: CHANGE,
    embark,
    history
  }
}

export function changeStateFulfilled (response) {
  /*
   *  log('changeStateFulfilled')
   */

  return {
    type: CHANGE_FULFILLED,
    response
  }
}

export function changeStateRejected (error) {
  /*
   *  log('changeStateRejected')
   */

  return {
    type: CHANGE_REJECTED,
    error
  }
}

export function submitState (embark, history) {
  /*
   *  log('submitState')
   */

  return {
    type: SUBMIT,
    embark,
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

export const change = (embark, history) => changeState(embark, history)

export const submit = (embark, history) => submitState(embark, history)
