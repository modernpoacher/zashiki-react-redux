import debug from 'debug'

import {
  PENDING,
  RESOLVED,
  REJECTED
} from '@modernpoacher/zashiki-react-redux/app/common'

import {
  ROUTE,
  FETCH,
  STORE,
  CHANGE,
  SUBMIT,

  FETCH_FULFILLED,
  STORE_FULFILLED,
  CHANGE_FULFILLED,
  SUBMIT_FULFILLED,

  FETCH_REJECTED,
  STORE_REJECTED,
  CHANGE_REJECTED,
  SUBMIT_REJECTED
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

import {
  MOUNT as ALPHA_MOUNT
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

import {
  MOUNT as OMEGA_MOUNT
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

import {
  MOUNT as ZASHIKI_MOUNT
} from '@modernpoacher/zashiki-react-redux/app/actions/zashiki'

const log = debug('zashiki-react-redux:app:reducers:stages:embark')

log('`embark` is awake')

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
export function change ({ status = PENDING, ...state } = {}, { history, embark: response = {} } = {}) {
  log('change')

  return Object.assign(state, { status }, (history ? { history } : {}), { response })
}

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export function submit ({ status = PENDING, ...state } = {}, { history, embark: response = {} } = {}) {
  log('submit')

  return Object.assign(state, { status }, (history ? { history } : {}), { response })
}

export function fetchFulfilled ({ ...state } = {}, { response = {} } = {}) {
  log('fetchFulfilled')

  return Object.assign(state, response, { status: RESOLVED })
}

export function storeFulfilled ({ ...state } = {}, { response = {} } = {}) {
  log('storeFulfilled')

  return Object.assign(state, response, { status: RESOLVED })
}

export function changeFulfilled ({ ...state } = {}, { response = {} } = {}) {
  log('changeFulfilled')

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

export function changeRejected ({ history } = {}, { error = {} } = {}) {
  log('changeRejected')

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
 *  Zashiki/Embark Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function embarkReducer (state = { ...STATE }, { type, ...action } = { ...ACTION }) {
  log('embarkReducer')

  switch (type) {
    case ROUTE:

      return route(state, action)
    case FETCH:

      return fetch(state, action)
    case STORE:

      return store(state, action)
    case CHANGE:

      return change(state, action)
    case SUBMIT:

      return submit(state, action)
    case FETCH_FULFILLED:

      return fetchFulfilled(state, action)
    case STORE_FULFILLED:

      return storeFulfilled(state, action)
    case CHANGE_FULFILLED:

      return changeFulfilled(state, action)
    case SUBMIT_FULFILLED:

      return submitFulfilled(state, action)
    case FETCH_REJECTED:

      return fetchRejected(state, action)
    case STORE_REJECTED:

      return storeRejected(state, action)
    case CHANGE_REJECTED:

      return changeRejected(state, action)
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
