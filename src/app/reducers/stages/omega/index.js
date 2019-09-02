import {
  Signals
} from 'shinkansen-signals'

import {
  ZASHIKI_OMEGA_ERROR as ERROR,
  ZASHIKI_OMEGA_CHANGE as CHANGE,
  ZASHIKI_OMEGA_FETCH as FETCH,
  ZASHIKI_OMEGA_STORE as STORE,
  ZASHIKI_OMEGA_QUERY as QUERY
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

const {
  PENDING
} = Signals
const STATE = {
  status: PENDING
}
const ACTION = {}

const CHANGE_FULFILLED = CHANGE.concat('_FULFILLED')
const FETCH_FULFILLED = FETCH.concat('_FULFILLED')
const STORE_FULFILLED = STORE.concat('_FULFILLED')
const QUERY_FULFILLED = QUERY.concat('_FULFILLED')

const CHANGE_REJECTED = CHANGE.concat('_REJECTED')
const FETCH_REJECTED = FETCH.concat('_REJECTED')
const STORE_REJECTED = STORE.concat('_REJECTED')
const QUERY_REJECTED = QUERY.concat('_REJECTED')

const change = ({ status = PENDING } = {}, {
  payload: {
    data = {}
  } = {}
} = {}) => ({ status, ...data })

const fetch = ({ status = PENDING } = {}, {
  payload: {
    data = {}
  } = {}
} = {}) => ({ status, ...data })

const store = ({ status = PENDING } = {}, {
  payload: {
    data = {}
  } = {}
} = {}) => ({ status, ...data })

const query = ({ status = PENDING } = {}, {
  payload: {
    data = {}
  } = {}
} = {}) => ({ status, ...data })

const changeFulfilled = ({ status = PENDING } = {}, {
  payload: {
    data = {}
  } = {}
} = {}) => ({ status, ...data })

const fetchFulfilled = ({ status = PENDING } = {}, {
  payload: {
    data = {}
  } = {}
} = {}) => ({ status, ...data })

const storeFulfilled = ({ status = PENDING } = {}, {
  payload: {
    data = {}
  } = {}
} = {}) => ({ status, ...data })

const queryFulfilled = ({ status = PENDING } = {}, {
  payload: {
    data = {}
  } = {}
} = {}) => ({ status, ...data })

const changeRejected = ({ status = PENDING } = {}, {
  payload: {
    data = {}
  } = {}
} = {}) => ({ status, ...data })

const fetchRejected = ({ status = PENDING } = {}, {
  payload: {
    data = {}
  } = {}
} = {}) => ({ status, ...data })

const storeRejected = ({ status = PENDING } = {}, {
  payload: {
    data = {}
  } = {}
} = {}) => ({ status, ...data })

const queryRejected = ({ status = PENDING } = {}, {
  payload: {
    data = {}
  } = {}
} = {}) => ({ status, ...data })

/**
 *  Zashiki/Omega Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function omegaReducer (state = STATE, { type, ...action } = ACTION) {
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
