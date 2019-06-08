import {
  Signals
} from 'shinkansen-signals'

import {
  ZASHIKI_DEBARK_ERROR as ERROR,
  ZASHIKI_DEBARK_FETCH as FETCH,
  ZASHIKI_DEBARK_STORE as STORE,
  ZASHIKI_DEBARK as DEBARK
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

const {
  PENDING
} = Signals
const STATE = {
  status: PENDING
}
const ACTION = {}

const FETCH_FULFILLED = FETCH.concat('_FULFILLED')
const STORE_FULFILLED = STORE.concat('_FULFILLED')
const DEBARK_FULFILLED = DEBARK.concat('_FULFILLED')

const FETCH_REJECTED = FETCH.concat('_REJECTED')
const STORE_REJECTED = STORE.concat('_REJECTED')
const DEBARK_REJECTED = DEBARK.concat('_REJECTED')

/**
 *  Remove stale attributes by ommission
 */
const transform = ({ status }) => ({ status })

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

const debark = (state, {
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

const debarkFulfilled = (state, {
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

const debarkRejected = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

/**
 *  DebarkStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function debarkReducer (state = STATE, { type, ...action } = ACTION) {
  switch (type) {
    case ERROR:

      return { ...state }
    case FETCH:

      return fetch(state, action)
    case STORE:

      return store(state, action)
    case DEBARK:

      return debark(state, action)
    case FETCH_FULFILLED:

      return fetchFulfilled(state, action)
    case STORE_FULFILLED:

      return storeFulfilled(state, action)
    case DEBARK_FULFILLED:

      return debarkFulfilled(state, action)
    case FETCH_REJECTED:

      return fetchRejected(state, action)
    case STORE_REJECTED:

      return storeRejected(state, action)
    case DEBARK_REJECTED:

      return debarkRejected(state, action)
    default:

      return state
  }
}
