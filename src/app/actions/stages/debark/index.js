/*
 *  DebarkStage Actions
 */
import Pantograph from 'shinkansen-engine/lib/components/pantograph'

const {
  ROUTE = 'DEBARK_ROUTE',
  CHANGE = 'DEBARK_CHANGE',
  SUBMIT = 'DEBARK_SUBMIT',
  FETCH = 'DEBARK_FETCH',
  STORE = 'DEBARK_STORE'
} = Pantograph.DEBARK

/*
 *  Action Types
 */
export {
  ROUTE,
  CHANGE,
  SUBMIT,
  FETCH,
  STORE
}

export const CHANGE_FULFILLED = SUBMIT.concat('_FULFILLED')
export const SUBMIT_FULFILLED = SUBMIT.concat('_FULFILLED')
export const FETCH_FULFILLED = FETCH.concat('_FULFILLED')
export const STORE_FULFILLED = STORE.concat('_FULFILLED')

export const CHANGE_REJECTED = SUBMIT.concat('_REJECTED')
export const SUBMIT_REJECTED = SUBMIT.concat('_REJECTED')
export const FETCH_REJECTED = FETCH.concat('_REJECTED')
export const STORE_REJECTED = STORE.concat('_REJECTED')

/*
 *  Action Creators
 */
export function debarkRoute (redirect, history) {
  return {
    type: ROUTE,
    redirect,
    history
  }
}

export function changeRoute (debark, history) {
  return {
    type: CHANGE,
    debark,
    history
  }
}

export function changeRouteFulfilled (response) {
  return {
    type: CHANGE_FULFILLED,
    response
  }
}

export function changeRouteRejected (error) {
  return {
    type: CHANGE_REJECTED,
    error
  }
}

export function submitRoute (debark, history) {
  return {
    type: SUBMIT,
    debark,
    history
  }
}

export function submitRouteFulfilled (response) {
  return {
    type: SUBMIT_FULFILLED,
    response
  }
}

export function submitRouteRejected (error) {
  return {
    type: SUBMIT_REJECTED,
    error
  }
}

export function fetchRoute (history) {
  return {
    type: FETCH,
    history
  }
}

export function fetchRouteFulfilled (response) {
  return {
    type: FETCH_FULFILLED,
    response
  }
}

export function fetchRouteRejected (error) {
  return {
    type: FETCH_REJECTED,
    error
  }
}

export function storeRoute (route, history) {
  return {
    type: STORE,
    route,
    history
  }
}

export function storeRouteFulfilled (response) {
  return {
    type: STORE_FULFILLED,
    response
  }
}

export function storeRouteRejected (error) {
  return {
    type: STORE_REJECTED,
    error
  }
}

export const change = (debark, history) => changeRoute(debark, history)

export const submit = (debark, history) => submitRoute(debark, history)

export const fetch = (history) => fetchRoute(history)

export const store = (response, history) => storeRoute({ response }, history)
