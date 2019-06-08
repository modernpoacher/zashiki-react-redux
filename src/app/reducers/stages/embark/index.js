import {
  Signals
} from 'shinkansen-signals'

import {
  ZASHIKI_EMBARK_ERROR as ERROR,
  ZASHIKI_EMBARK_FETCH as FETCH,
  ZASHIKI_EMBARK_STORE as STORE,
  ZASHIKI_EMBARK as EMBARK
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

const {
  PENDING
} = Signals
const STATE = {
  status: PENDING
}
const ACTION = {}

const FETCH_FULFILLED = FETCH.concat('_FULFILLED')
const STORE_FULFILLED = STORE.concat('_FULFILLED')
const EMBARK_FULFILLED = EMBARK.concat('_FULFILLED')

const FETCH_REJECTED = FETCH.concat('_REJECTED')
const STORE_REJECTED = STORE.concat('_REJECTED')
const EMBARK_REJECTED = EMBARK.concat('_REJECTED')

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

const embark = (state, {
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

const embarkFulfilled = (state, {
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

const embarkRejected = (state, {
  payload: {
    data = {}
  } = {}
}) => ({ ...transform(state), ...data })

/**
 *  EmbarkStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function embarkReducer (state = STATE, { type, ...action } = ACTION) {
  switch (type) {
    case ERROR:

      return { ...state }
    case FETCH:

      return fetch(state, action)
    case STORE:

      return store(state, action)
    case EMBARK:

      return embark(state, action)
    case FETCH_FULFILLED:

      return fetchFulfilled(state, action)
    case STORE_FULFILLED:

      return storeFulfilled(state, action)
    case EMBARK_FULFILLED:

      return embarkFulfilled(state, action)
    case FETCH_REJECTED:

      return fetchRejected(state, action)
    case STORE_REJECTED:

      return storeRejected(state, action)
    case EMBARK_REJECTED:

      return embarkRejected(state, action)
    default:

      return state
  }
}
