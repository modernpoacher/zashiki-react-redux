/**
 * EmbarkStage Actions
 */
import {
  Pantograph
} from 'shinkansen-pantograph'

const {
  SUBMIT,
  ERROR,
  ROUTE,
  FETCH,
  STORE
} = Pantograph.EMBARK

/**
 * Action Types
 */
export {
  SUBMIT,
  ERROR,
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

/**
 * Action Creators
 */
export function embarkRoute (route) {
  return {
    type: ROUTE,
    route
  }
}

export function submitRoute (route) {
  return {
    type: SUBMIT,
    route
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

export function storeRoute (route) {
  return {
    type: STORE,
    route
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

export const submit = (route) => submitRoute(route)

export const fetch = () => fetchRoute()

export const store = ({ statement }) => storeRoute({ response: { statement } })
