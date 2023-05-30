import debug from 'debug'

import {
  PENDING,
  RESOLVED,
  REJECTED
} from '@modernpoacher/zashiki-react-redux/app/common'

import {
  CHANGE,
  SUBMIT,
  FETCH,
  STORE,
  QUERY,

  CHANGE_FULFILLED,
  SUBMIT_FULFILLED,
  FETCH_FULFILLED,
  STORE_FULFILLED,
  QUERY_FULFILLED,

  CHANGE_REJECTED,
  SUBMIT_REJECTED,
  FETCH_REJECTED,
  STORE_REJECTED,
  QUERY_REJECTED
} from '@modernpoacher/zashiki-react-redux/app/actions/zashiki'

import {
  MOUNT as ALPHA_MOUNT
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

import {
  MOUNT as OMEGA_MOUNT
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

const STATE = {
  status: PENDING
}

const ACTION = {}

/*
 *  Get all from state
 *  Set `router` `route` from action
 */
export function change ({ status = PENDING, ...state } = {}, { router, route = {} } = {}) {
  /*
   *  log('change')
   */

  return Object.assign(state, { status, router }, route)
}

/*
 *  Get all from state
 *  Set `router` `route` from action
 */
export function submit ({ status = PENDING, ...state } = {}, { router, route = {} } = {}) {
  /*
   *  log('submit')
   */

  return Object.assign(state, { status, router }, route)
}

/*
 *  Get all from state
 *  Set `router` `route` from action
 */
export function fetch ({ status = PENDING, ...state } = {}, action = {}) {
  /*
   *  log('fetch')
   */

  return Object.assign(state, { status }, action)
}

/*
 *  Get all from state
 *  Set `router` `route` from action
 */
export function store ({ status = PENDING, ...state } = {}, { router, route = {} } = {}) {
  /*
   *  log('store')
   */

  return Object.assign(state, { status, router }, route)
}

/*
 *  Get all from state
 *  Add all from action
 */
export function query ({ status = PENDING, ...state } = {}, action = {}) {
  /*
   *  log('query')
   */

  return Object.assign(state, { status }, action)
}

export function changeFulfilled (state = {}, { response = {} } = {}) {
  /*
   *  log('changeFulfilled')
   */

  return Object.assign(state, response, { status: RESOLVED })
}

export function submitFulfilled (state = {}, { response = {} } = {}) {
  /*
   *  log('submitFulfilled')
   */

  return Object.assign(state, response, { status: RESOLVED })
}

export function fetchFulfilled (state = {}, { response = {} } = {}) {
  /*
   *  log('fetchFulfilled')
   */

  return Object.assign(state, response, { status: RESOLVED })
}

export function storeFulfilled (state = {}, { response = {} } = {}) {
  /*
   *  log('storeFulfilled')
   */

  return Object.assign(state, response, { status: RESOLVED })
}

export function queryFulfilled (state = {}, { response = {} } = {}) {
  /*
   *  log('queryFulfilled')
   */

  return Object.assign(state, response, { status: RESOLVED })
}

export function changeRejected ({ router } = {}, { error = {} } = {}) {
  /*
   *  log('changeRejected')
   */

  return Object.assign((router ? { router } : {}), { exception: error, status: REJECTED })
}

export function submitRejected ({ router } = {}, { error = {} } = {}) {
  /*
   *  log('submitRejected')
   */

  return Object.assign((router ? { router } : {}), { exception: error, status: REJECTED })
}

export function fetchRejected ({ router } = {}, { error = {} } = {}) {
  /*
   *  log('fetchRejected')
   */

  return Object.assign((router ? { router } : {}), { exception: error, status: REJECTED })
}

export function storeRejected ({ router } = {}, { error = {} } = {}) {
  /*
   *  log('storeRejected')
   */

  return Object.assign((router ? { router } : {}), { exception: error, status: REJECTED })
}

export function queryRejected ({ router } = {}, { error = {} } = {}) {
  /*
   *  log('queryRejected')
   */

  return Object.assign((router ? { router } : {}), { exception: error, status: REJECTED })
}

const log = debug('zashiki-react-redux/app/reducers/zashiki')

log('`zashiki` is awake')

/**
 *  Zashiki Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function zashikiReducer (state = STATE, { type, ...action } = ACTION) {
  /*
   *  log('zashikiReducer')
   */

  switch (type) {
    case CHANGE:

      return change(state, action)
    case SUBMIT:

      return submit(state, action)
    case FETCH:

      return fetch(state, action)
    case STORE:

      return store(state, action)
    case QUERY:

      return query(state, action)
    case CHANGE_FULFILLED:

      return changeFulfilled(state, action)
    case SUBMIT_FULFILLED:

      return submitFulfilled(state, action)
    case FETCH_FULFILLED:

      return fetchFulfilled(state, action)
    case STORE_FULFILLED:

      return storeFulfilled(state, action)
    case QUERY_FULFILLED:

      return queryFulfilled(state, action)
    case CHANGE_REJECTED:

      return changeRejected(state, action)
    case SUBMIT_REJECTED:

      return submitRejected(state, action)
    case FETCH_REJECTED:

      return fetchRejected(state, action)
    case STORE_REJECTED:

      return storeRejected(state, action)
    case QUERY_REJECTED:

      return queryRejected(state, action)
    case ALPHA_MOUNT:
    case OMEGA_MOUNT:

      return STATE
    default:

      return state
  }
}
