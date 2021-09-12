import {
  PENDING,
  RESOLVED,
  REJECTED
} from '@modernpoacher/zashiki-react-redux/app/common'

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

import {
  MOUNT as ALPHA_MOUNT
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

import {
  MOUNT as OMEGA_MOUNT
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

const STATE = {
  status: PENDING
}

const ACTION = {}

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const change = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => Object.assign(state, { status, history }, route)

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const submit = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => Object.assign(state, { status, history }, route)

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const fetch = ({ status = PENDING, ...state } = {}, action = {}) => Object.assign(state, { status }, action)

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const store = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => Object.assign(state, { status, history }, route)

/*
 *  Get all from state
 *  Add all from action
 */
export const query = ({ status = PENDING, ...state } = {}, action = {}) => Object.assign(state, { status }, action)

export const changeFulfilled = (state = {}, { response = {} } = {}) => Object.assign(state, response, { status: RESOLVED })

export const submitFulfilled = (state = {}, { response = {} } = {}) => Object.assign(state, response, { status: RESOLVED })

export const fetchFulfilled = (state = {}, { response = {} } = {}) => Object.assign(state, response, { status: RESOLVED })

export const storeFulfilled = (state = {}, { response = {} } = {}) => Object.assign(state, response, { status: RESOLVED })

export const queryFulfilled = (state = {}, { response = {} } = {}) => Object.assign(state, response, { status: RESOLVED })

export const changeRejected = ({ history } = {}, { error = {} } = {}) => Object.assign((history ? { history } : {}), { exception: error, status: REJECTED })

export const submitRejected = ({ history } = {}, { error = {} } = {}) => Object.assign((history ? { history } : {}), { exception: error, status: REJECTED })

export const fetchRejected = ({ history } = {}, { error = {} } = {}) => Object.assign((history ? { history } : {}), { exception: error, status: REJECTED })

export const storeRejected = ({ history } = {}, { error = {} } = {}) => Object.assign((history ? { history } : {}), { exception: error, status: REJECTED })

export const queryRejected = ({ history } = {}, { error = {} } = {}) => Object.assign((history ? { history } : {}), { exception: error, status: REJECTED })

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
    case ALPHA_MOUNT:
    case OMEGA_MOUNT:

      return STATE
    default:

      return state
  }
}
