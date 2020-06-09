/*
 *  EmbarkStage Actions
 */
import {
  Pantograph
} from 'shinkansen-pantograph'

const {
  ROUTE = 'EMBARK_ROUTE',
  CHANGE = 'EMBARK_CHANGE',
  SUBMIT = 'EMBARK_SUBMIT',
  FETCH = 'EMBARK_ROUTE',
  STORE = 'EMBARK_ROUTE'
} = Pantograph.EMBARK

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
export function embarkRoute (redirect, history) {
  return {
    type: ROUTE,
    redirect,
    history
  }
}

export function changeRoute (embark, history) {
  return {
    type: CHANGE,
    embark,
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

export function submitRoute (embark, history) {
  return {
    type: SUBMIT,
    embark,
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

export const change = (embark, history) => changeRoute(embark, history)

export const submit = (embark, history) => submitRoute(embark, history)

export const fetch = (history) => fetchRoute(history)

export const store = (response, history) => storeRoute({ response }, history)
