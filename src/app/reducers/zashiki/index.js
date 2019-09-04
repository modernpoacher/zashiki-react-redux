import {
  Signals
} from 'shinkansen-signals'

import {
  ERROR,

  CHANGE,
  FETCH,
  STORE,
  QUERY,

  CHANGE_FULFILLED,
  FETCH_FULFILLED,
  STORE_FULFILLED,
  QUERY_FULFILLED,

  CHANGE_REJECTED,
  FETCH_REJECTED,
  STORE_REJECTED,
  QUERY_REJECTED
} from '@modernpoacher/zashiki-react-redux/app/actions/zashiki'

const {
  PENDING
} = Signals
const STATE = {
  status: PENDING
}
const ACTION = {}

const change = (state, {
  response = {}
}) => ({ ...state, ...response })

const fetch = (state, {
  response = {}
}) => ({ ...state, ...response })

const store = (state, {
  response = {}
}) => ({ ...state, ...response })

const query = (state, {
  response = {}
}) => ({ ...state, ...response })

const changeFulfilled = (state, {
  response = {}
}) => ({ ...state, ...response })

const fetchFulfilled = (state, {
  response = {}
}) => ({ ...state, ...response })

const storeFulfilled = (state, {
  response = {}
}) => ({ ...state, ...response })

const queryFulfilled = (state, {
  response = {}
}) => ({ ...state, ...response })

const changeRejected = (state, {
  response = {}
}) => ({ ...state, ...response })

const fetchRejected = (state, {
  response = {}
}) => ({ ...state, ...response })

const storeRejected = (state, {
  response = {}
}) => ({ ...state, ...response })

const queryRejected = (state, {
  response = {}
}) => ({ ...state, ...response })

/**
 *  Zashiki Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function zashikiReducer (state = STATE, { type, ...action } = ACTION) {
  switch (type) {
    case ERROR:

      return { ...state }
    case CHANGE:

      return change(state, action)
    case FETCH:

      return fetch(state, action)
    case STORE:

      return store(state, action)
    case QUERY:

      return query(state, action)
    case CHANGE_FULFILLED:

      return changeFulfilled(state, action)
    case FETCH_FULFILLED:

      return fetchFulfilled(state, action)
    case STORE_FULFILLED:

      return storeFulfilled(state, action)
    case QUERY_FULFILLED:

      return queryFulfilled(state, action)
    case CHANGE_REJECTED:

      return changeRejected(state, action)
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
