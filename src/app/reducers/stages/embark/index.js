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
export const route = ({ status = PENDING, ...state } = {}, { history, redirect = {} } = {}) => Object.assign(state, { status, history, redirect })

/*
 *  Get all from state
 *  Set all from action
 */
export const fetch = ({ status = PENDING, ...state } = {}, action = {}) => Object.assign(state, { status }, action)

/*
 *  Get `resource` `response` from state
 *  Set `history` `route` from action
 */
export const store = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => Object.assign(state, { status, history }, route)

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const change = ({ status = PENDING, response: RESPONSE = {}, ...state } = {}, { history, embark = {} } = {}) => Object.assign(state, { status, history, response: Object.assign(RESPONSE, embark) })

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const submit = ({ status = PENDING, ...state } = {}, { history, embark = {} } = {}) => Object.assign(state, { status, history }, embark)

export const fetchFulfilled = (state = {}, { response = {} } = {}) => Object.assign(state, response, { status: RESOLVED })

export const storeFulfilled = (state = {}, { response = {} } = {}) => Object.assign(state, response, { status: RESOLVED })

export const changeFulfilled = (state = {}, { response = {} } = {}) => Object.assign(state, response, { status: RESOLVED })

export const submitFulfilled = (state = {}, { response = {} } = {}) => Object.assign(state, response, { status: RESOLVED })

export const fetchRejected = ({ history } = {}, { error = {} } = {}) => Object.assign((history ? { history } : {}), { exception: error, status: REJECTED })

export const storeRejected = ({ history } = {}, { error = {} } = {}) => Object.assign((history ? { history } : {}), { exception: error, status: REJECTED })

export const changeRejected = ({ history } = {}, { error = {} } = {}) => Object.assign((history ? { history } : {}), { exception: error, status: REJECTED })

export const submitRejected = ({ history } = {}, { error = {} } = {}) => Object.assign((history ? { history } : {}), { exception: error, status: REJECTED })

export const initialise = (state = {}) => Object.assign(state, { status: RESOLVED })

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
