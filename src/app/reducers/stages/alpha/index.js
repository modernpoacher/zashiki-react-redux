import {
  Signals
} from 'shinkansen-signals'

import {
  ZASHIKI_ALPHA_ERROR as ERROR,
  ZASHIKI_ALPHA_CHANGE as CHANGE,
  ZASHIKI_ALPHA_FETCH as FETCH,
  ZASHIKI_ALPHA_STORE as STORE,
  ZASHIKI_ALPHA_QUERY as QUERY
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

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

/**
 *  Remove stale attributes by ommission
 */
const transform = ({ status }) => ({ status })

const change = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

const fetch = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

const store = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

const query = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

const changeFulfilled = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

const fetchFulfilled = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

const storeFulfilled = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

const queryFulfilled = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

const changeRejected = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

const fetchRejected = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

const storeRejected = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

const queryRejected = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

/**
 *  Zashiki/Alpha Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function alphaReducer (state = STATE, { type, ...action } = ACTION) {
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
