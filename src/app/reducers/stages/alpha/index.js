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
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

const {
  PENDING
} = Signals

const STATE = {
  status: PENDING
}

const ACTION = {}

const route = ({ status = PENDING } = {}, { route = {} } = {}) => ({ status, ...route })

const change = ({ status = PENDING } = {}, { route = {} } = {}) => ({ status, ...route })

const fetch = ({ status = PENDING } = {}, action = {}) => ({ status, ...action })

const store = ({ status = PENDING } = {}, { route = {} } = {}) => ({ status, ...route })

const query = ({ status = PENDING } = {}, action = {}) => ({ status, ...action })

const submit = ({ status = PENDING } = {}, { route = {} } = {}) => ({ status, ...route })

const changeFulfilled = ({ status = PENDING } = {}, { response = {} } = {}) => ({ status, ...response })

const fetchFulfilled = ({ status = PENDING } = {}, { response = {} } = {}) => ({ status, ...response })

const storeFulfilled = ({ status = PENDING } = {}, { response = {} } = {}) => ({ status, ...response })

const queryFulfilled = ({ status = PENDING } = {}, { response = {} } = {}) => ({ status, ...response })

const submitFulfilled = ({ status = PENDING } = {}, { response = {} } = {}) => ({ status, ...response })

const changeRejected = ({ status = PENDING } = {}, { error = {} } = {}) => ({ status, error })

const fetchRejected = ({ status = PENDING } = {}, { error = {} } = {}) => ({ status, error })

const storeRejected = ({ status = PENDING } = {}, { error = {} } = {}) => ({ status, error })

const queryRejected = ({ status = PENDING } = {}, { error = {} } = {}) => ({ status, error })

const submitRejected = ({ status = PENDING } = {}, { error = {} } = {}) => ({ status, error })

/**
 *  Zashiki/Alpha Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function alphaReducer (state = STATE, { type, ...action } = ACTION) {
  switch (type) {
    case ROUTE:

      return route(state, action)
    case CHANGE:

      return change(state, action)
    case FETCH:

      return fetch(state, action)
    case STORE:

      return store(state, action)
    case QUERY:

      return query(state, action)
    case SUBMIT:

      return submit(state, action)
    case CHANGE_FULFILLED:

      return changeFulfilled(state, action)
    case FETCH_FULFILLED:

      return fetchFulfilled(state, action)
    case STORE_FULFILLED:

      return storeFulfilled(state, action)
    case QUERY_FULFILLED:

      return queryFulfilled(state, action)
    case SUBMIT_FULFILLED:

      return submitFulfilled(state, action)
    case CHANGE_REJECTED:

      return changeRejected(state, action)
    case FETCH_REJECTED:

      return fetchRejected(state, action)
    case STORE_REJECTED:

      return storeRejected(state, action)
    case QUERY_REJECTED:

      return queryRejected(state, action)
    case SUBMIT_REJECTED:

      return submitRejected(state, action)
    default:

      return state
  }
}
