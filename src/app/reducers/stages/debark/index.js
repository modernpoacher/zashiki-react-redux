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

const route = ({ status = PENDING } = {}, { route = {} } = {}) => ({ status, ...route })

const fetch = ({ status = PENDING } = {}, action = {}) => ({ status, ...action })

const store = ({ status = PENDING } = {}, { route = {} } = {}) => ({ status, ...route })

const submit = ({ status = PENDING } = {}, { route = {} } = {}) => ({ status, ...route })

const fetchFulfilled = ({ status = PENDING } = {}, { response = {} } = {}) => ({ status, ...response })

const storeFulfilled = ({ status = PENDING } = {}, { response = {} } = {}) => ({ status, ...response })

const submitFulfilled = ({ status = PENDING } = {}, { response = {} } = {}) => ({ status, ...response })

const fetchRejected = ({ status = PENDING } = {}, { error = {} } = {}) => ({ status, error })

const storeRejected = ({ status = PENDING } = {}, { error = {} } = {}) => ({ status, error })

const submitRejected = ({ status = PENDING } = {}, { error = {} } = {}) => ({ status, error })

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
