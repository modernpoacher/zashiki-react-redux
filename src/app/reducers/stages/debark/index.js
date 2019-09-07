import {
  Signals
} from 'shinkansen-signals'

import {
  ROUTE,
  SUBMIT,
  FETCH,
  STORE,

  SUBMIT_FULFILLED,
  FETCH_FULFILLED,
  STORE_FULFILLED,

  SUBMIT_REJECTED,
  FETCH_REJECTED,
  STORE_REJECTED
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

const {
  PENDING
} = Signals

const STATE = {
  status: PENDING
}

const ACTION = {}

/**
 *  Get all from state
 *  Add `redirect`
 */
const route = ({ status = PENDING, ...state } = {}, { history, redirect = {} } = {}) => ({ status, ...state, history, redirect })

/**
 *  Get all from state
 *  Set all from action
 */
const fetch = ({ status = PENDING, ...state } = {}, action = {}) => ({ status, ...state, ...action })

/**
 *  Get `resource` `response` from state
 *  Set `history` `route` from action
 */
const store = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ status, ...state, history, ...route })

/**
 *  Get all from state
 *  Set `history` `route` from action
 */
const submit = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ status, ...state, history, ...route })

const fetchFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

const storeFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

const submitFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

const fetchRejected = ({ status = PENDING, history } = {}, { error = {} } = {}) => ({ status, ...(history ? { history } : {}), error })

const storeRejected = ({ status = PENDING, history } = {}, { error = {} } = {}) => ({ status, ...(history ? { history } : {}), error })

const submitRejected = ({ status = PENDING, history } = {}, { error = {} } = {}) => ({ status, ...(history ? { history } : {}), error })

/**
 *  DebarkStage Reducer
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
