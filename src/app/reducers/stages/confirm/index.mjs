import debug from 'debug'

import {
  PENDING,
  RESOLVED,
  REJECTED
} from '#app/common'

import {
  ROUTE,
  FETCH,
  STORE,
  SUBMIT,

  FETCH_FULFILLED,
  STORE_FULFILLED,
  SUBMIT_FULFILLED,

  FETCH_REJECTED,
  STORE_REJECTED,
  SUBMIT_REJECTED
} from '#app/actions/stages/confirm'

import {
  MOUNT as ALPHA_MOUNT
} from '#app/actions/stages/alpha'

import {
  MOUNT as OMEGA_MOUNT
} from '#app/actions/stages/omega'

import {
  MOUNT as ZASHIKI_MOUNT
} from '#app/actions/zashiki'

const log = debug('zashiki-react-redux:app:reducers:stages:confirm')

log('`confirm` is awake')

const STATE = {
  status: PENDING
}

const ACTION = {}

/*
 *  Get all from state
 *  Add `redirect`
 */
export function route ({ status = PENDING, ...state } = {}, { history, redirect = {} } = {}) {
  log('route')

  return Object.assign(state, { status }, (history ? { history } : {}), { redirect })
}

/*
 *  Get all from state
 *  Set all from action
 */
export function fetch ({ status = PENDING, ...state } = {}, action = {}) {
  log('fetch')

  return Object.assign(state, { status }, action)
}

/*
 *  Get `resource` `response` from state
 *  Set `history` `route` from action
 */
export function store ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) {
  log('store')

  return Object.assign(state, { status }, (history ? { history } : {}), route)
}

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export function submit ({ status = PENDING, ...state } = {}, { history, confirm = {} } = {}) {
  log('submit')

  return Object.assign(state, { status }, (history ? { history } : {}), confirm)
}

export function fetchFulfilled ({ ...state } = {}, { response = {} } = {}) {
  log('fetchFulfilled')

  return Object.assign(state, response, { status: RESOLVED })
}

export function storeFulfilled ({ ...state } = {}, { response = {} } = {}) {
  log('storeFulfilled')

  return Object.assign(state, response, { status: RESOLVED })
}

export function submitFulfilled ({ ...state } = {}, { response = {} } = {}) {
  log('submitFulfilled')

  return Object.assign(state, response, { status: RESOLVED })
}

export function fetchRejected ({ history } = {}, { error = {} } = {}) {
  log('fetchRejected')

  return Object.assign((history ? { history } : {}), { exception: error, status: REJECTED })
}

export function storeRejected ({ history } = {}, { error = {} } = {}) {
  log('storeRejected')

  return Object.assign((history ? { history } : {}), { exception: error, status: REJECTED })
}

export function submitRejected ({ history } = {}, { error = {} } = {}) {
  log('submitRejected')

  return Object.assign((history ? { history } : {}), { exception: error, status: REJECTED })
}

export function initialise (state = {}) {
  log('initialise')

  return Object.assign(state, { status: RESOLVED })
}

/**
 *  ConfirmStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function confirmReducer (state = { ...STATE }, { type, ...action } = { ...ACTION }) {
  log('confirmReducer')

  switch (type) {
    case ROUTE:

      return route(state, action)
    case FETCH:

      return fetch(state, action)
    case STORE:

      return store(state, action)
    case SUBMIT:

      return submit(state, action)
    case FETCH_FULFILLED:

      return fetchFulfilled(state, action)
    case STORE_FULFILLED:

      return storeFulfilled(state, action)
    case SUBMIT_FULFILLED:

      return submitFulfilled(state, action)
    case FETCH_REJECTED:

      return fetchRejected(state, action)
    case STORE_REJECTED:

      return storeRejected(state, action)
    case SUBMIT_REJECTED:

      return submitRejected(state, action)
    case ALPHA_MOUNT:
    case OMEGA_MOUNT:
    case ZASHIKI_MOUNT:

      return { ...STATE }
    default:

      return state
  }
}
