import Signals from 'shinkansen-engine/lib/components/signals'

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
 *  Set `history` `route` from action
 */
export const change = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ status, ...state, history, ...route })

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const submit = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ status, ...state, history, ...route })

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const fetch = ({ status = PENDING, ...state } = {}, action = {}) => ({ status, ...state, ...action })

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const store = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ status, ...state, history, ...route })

/*
 *  Get all from state
 *  Add all from action
 */
export const query = ({ status = PENDING, ...state } = {}, action = {}) => ({ status, ...state, ...action })

export const changeFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const submitFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const fetchFulfilled = ({ status = PENDING, ...state } = {}, { response = {} }) => ({ status, ...state, ...response })

export const storeFulfilled = ({ status = PENDING, ...state } = {}, { response = {} }) => ({ status, ...state, ...response })

export const queryFulfilled = ({ status = PENDING, ...state } = {}, { response = {} }) => ({ status, ...state, ...response })

export const changeRejected = ({ history }, { status = FAILURE, error = {} }) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const submitRejected = ({ history }, { status = FAILURE, error = {} }) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const fetchRejected = ({ history }, { status = FAILURE, error = {} }) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const storeRejected = ({ history }, { status = FAILURE, error = {} }) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const queryRejected = ({ history }, { status = FAILURE, error = {} }) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

/**
 *  Zashiki Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function zashikiReducer (state = STATE, { type, ...action } = ACTION) {
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
    default:

      return state
  }
}
