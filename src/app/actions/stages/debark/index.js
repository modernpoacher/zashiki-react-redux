/*
 *  DebarkStage Actions
 */
import {
  Pantograph
} from 'shinkansen-pantograph'

const {
  SUBMIT,
  ROUTE,
  FETCH,
  STORE
} = Pantograph.DEBARK

/*
 *  Action Types
 */
export {
  SUBMIT,
  ROUTE,
  FETCH,
  STORE
}

export const SUBMIT_FULFILLED = SUBMIT.concat('_FULFILLED')
export const FETCH_FULFILLED = FETCH.concat('_FULFILLED')
export const STORE_FULFILLED = STORE.concat('_FULFILLED')

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

export const submit = (debark, history) => submitRoute(debark, history)

export const fetch = (history) => fetchRoute(history)

export const store = (response, history) => storeRoute({ response }, history)
