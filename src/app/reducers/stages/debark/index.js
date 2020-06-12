import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

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
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

const log = debug('zashiki-react-redux:app:reducers:stages:debark')

log('`debark` is awake')

const {
  PENDING,
  FAILURE
} = Signals

const STATE = {
  status: PENDING
}

const ACTION = {}

/*
 *  Get all from state
 *  Add `redirect`
 */
export const route = ({ status = PENDING, ...state } = {}, { history, redirect = {} } = {}) => ({ status, ...state, history, redirect })

/*
 *  Get all from state
 *  Set all from action
 */
export const fetch = ({ status = PENDING, ...state } = {}, action = {}) => ({ status, ...state, ...action })

/*
 *  Get `resource` `response` from state
 *  Set `history` `route` from action
 */
export const store = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ status, ...state, history, ...route })

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const submit = ({ status = PENDING, ...state } = {}, { history, debark = {} } = {}) => ({ status, ...state, history, ...debark })

export const fetchFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const storeFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const submitFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const fetchRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const storeRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const submitRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

/**
 *  Zashiki/Debark Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function debarkReducer (state = STATE, { type, ...action } = ACTION) {
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
    default:

      return state
  }
}
