/**
 *  Zashiki/Alpha Actions
 */
import {
  Pantograph
} from 'shinkansen-pantograph'

const {
  ROUTE,
  CHANGE,
  SUBMIT,
  FETCH,
  STORE,
  QUERY
} = Pantograph.ALPHA

/**
 *  Action Types
 */
export {
  ROUTE,
  CHANGE,
  SUBMIT,
  FETCH,
  STORE,
  QUERY
}

export const CHANGE_FULFILLED = CHANGE.concat('_FULFILLED')
export const SUBMIT_FULFILLED = SUBMIT.concat('_FULFILLED')
export const FETCH_FULFILLED = FETCH.concat('_FULFILLED')
export const STORE_FULFILLED = STORE.concat('_FULFILLED')
export const QUERY_FULFILLED = QUERY.concat('_FULFILLED')

export const CHANGE_REJECTED = CHANGE.concat('_REJECTED')
export const SUBMIT_REJECTED = SUBMIT.concat('_REJECTED')
export const FETCH_REJECTED = FETCH.concat('_REJECTED')
export const STORE_REJECTED = STORE.concat('_REJECTED')
export const QUERY_REJECTED = QUERY.concat('_REJECTED')

/**
 *  Action Creators
 */
export function alphaRoute (redirect, history) {
  return {
    type: ROUTE,
    redirect,
    history
  }
}

export function changeRoute (route, history) {
  return {
    type: CHANGE,
    route,
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

export function submitRoute (route, history) {
  return {
    type: SUBMIT,
    route,
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

export function fetchRoute () {
  return {
    type: FETCH
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

export function queryRoute () {
  return {
    type: QUERY
  }
}

export function queryRouteFulfilled (response) {
  return {
    type: QUERY_FULFILLED,
    response
  }
}

export function queryRouteRejected (error) {
  return {
    type: QUERY_REJECTED,
    error
  }
}

export const change = (resource, history) => changeRoute({ resource }, history)

export const submit = (resource, response, history) => submitRoute({ resource, response }, history)

export const fetch = () => fetchRoute()

export const store = (resource, response, history) => storeRoute({ resource, response }, history)
