import {
  Signals
} from 'shinkansen-signals'

import {
  ROUTE,
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
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

import {
  ROUTE as EMBARK_ROUTE
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

import {
  ROUTE as DEBARK_ROUTE
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

const {
  PENDING,
  FAILURE
} = Signals

const STATE = {
  status: PENDING
}

const ACTION = {}

/**
 *  Get all from state
 *  Add `redirect`
 */
export const route = ({ status = PENDING, ...state } = {}, { history, redirect = {} } = {}) => ({ status, ...state, history, redirect })

/**
 *  Get all from state
 *  Set `history` `route` from action
 */
export const change = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ status, ...state, history, ...route })

/**
 *  Get all from state
 *  Set `history` `route` from action
 */
export const submit = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ status, ...state, history, ...route })

/**
 *  Get all from state
 *  Set all from action
 */
export const fetch = ({ status = PENDING, ...state } = {}, action = {}) => ({ status, ...state, ...action })

/**
 *  Get `resource` `response` from state
 *  Set `history` `route` from action
 */
export const store = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ status, ...state, history, ...route })

/**
 *  Get all from state
 *  Add `redirect`
 */
export const query = ({ status = PENDING, ...state } = {}, action = {}) => ({ status, ...state, ...action })

/**
 *  Not `redirect` from state
 */
export const changeFulfilled = ({ alpha, definition, gears, resource, state } = {}, { status = PENDING, response = {} } = {}) => ({
  status,
  ...(alpha ? { alpha } : {}),
  ...(definition ? { definition } : {}),
  ...(gears ? { gears } : {}),
  ...(resource ? { resource } : {}),
  ...(state ? { state } : {}),
  resource: {},
  response: {},
  ...response
})

export const submitFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const fetchFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const storeFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const queryFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const changeRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const submitRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const fetchRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const storeRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const queryRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

/**
 *  Zashiki/Omega Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function omegaReducer (state = STATE, { type, ...action } = ACTION) {
  switch (type) {
    case ROUTE:

      return route(state, action)
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
    case EMBARK_ROUTE:
    case DEBARK_ROUTE:

      return STATE
    default:

      return state
  }
}
