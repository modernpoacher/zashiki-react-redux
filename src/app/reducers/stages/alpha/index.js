import debug from 'debug'

import equal from 'fast-deep-equal'

import Signals from 'shinkansen-engine/lib/components/signals'

import {
  ROUTE,
  MOUNT,
  FETCH,
  STORE,
  QUERY,
  CHANGE,
  SUBMIT,

  MOUNT_FULFILLED,
  FETCH_FULFILLED,
  STORE_FULFILLED,
  QUERY_FULFILLED,
  CHANGE_FULFILLED,
  SUBMIT_FULFILLED,

  MOUNT_REJECTED,
  FETCH_REJECTED,
  STORE_REJECTED,
  QUERY_REJECTED,
  CHANGE_REJECTED,
  SUBMIT_REJECTED
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

import {
  ROUTE as EMBARK_ROUTE
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

import {
  ROUTE as DEBARK_ROUTE
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

const log = debug('zashiki-react-redux:app:reducers:stages:alpha')

log('`alpha` is awake')

const {
  PENDING,
  FAILURE,
  COMPLETE
} = Signals

const STATE = {
  status: PENDING
}

const ACTION = {}

/*
 *  Get all from state
 *  Add `redirect`
 */
export const route = ({ status = PENDING, ...state } = {}, { history, redirect = {} } = {}) => ({ status, ...state, history, redirect })

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const mount = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ status, ...state, history, ...route })

/*
 *  Get all from state
 *  Set all from action
 */
export const fetch = ({ status = PENDING, ...state } = {}, action = {}) => ({ status, ...state, ...action })

/*
 *  Get `resource` from state
 *  Set `history` `route` from action
 */
export const store = ({ status = PENDING, ...state } = {}, { history, route: { resource } = {} } = {}) => ({ status, ...state, history, resource })

/*
 *  Get all from state
 *  Add `redirect`
 */
export const query = ({ status = PENDING, ...state } = {}, action = {}) => ({ status, ...state, ...action })

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const change = ({ status = PENDING, omega = [], ...state } = {}, { history, route: { resource: RESOURCE = {}, response: RESPONSE = {} } = {} } = {}) => {
  /*
   *  While it's cheaper and faster to change just one item, Redux doesn't see it
   *
   *  Instead, we change the whole array (as simply as possible)
   *
   *  Redux prefers a flat data structure. We could make one but we don't need it yet
   */
  return {
    status,
    ...state,
    history,
    omega: omega.map((item) => {
      const {
        resource
      } = item

      if (equal(resource, RESOURCE)) {
        const {
          response
        } = item

        return {
          ...item,
          response: {
            ...response,
            ...RESPONSE
          }
        }
      }

      return item
    })
  }
}

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const submit = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ status, ...state, history, ...route })

/*
 *  Not `redirect` from state
 */
export const mountFulfilled = ({ status = PENDING, omega, gears, resource, state, history } = {}, { response = {} } = {}) => {
  return {
    status,
    ...(omega ? { omega } : {}),
    ...(gears ? { gears } : {}),
    ...(state ? { state } : {}),
    history,
    resource: {},
    response: {},
    ...response
  }
}

export const fetchFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const storeFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const queryFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const changeFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const submitFulfilled = ({ status = PENDING, ...state } = {}, { response = {} } = {}) => ({ status, ...state, ...response })

export const mountRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const fetchRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const storeRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const queryRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const changeRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

export const submitRejected = ({ history } = {}, { status = FAILURE, error = {} } = {}) => ({ status, ...(history ? { history } : {}), exception: { ...error } })

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
    case MOUNT:

      return mount(state, action)
    case FETCH:

      return fetch(state, action)
    case STORE:

      return store(state, action)
    case QUERY:

      return query(state, action)
    case CHANGE:

      return change(state, action)
    case SUBMIT:

      return submit(state, action)
    case MOUNT_FULFILLED:

      return mountFulfilled(state, action)
    case FETCH_FULFILLED:

      return fetchFulfilled(state, action)
    case STORE_FULFILLED:

      return storeFulfilled(state, action)
    case QUERY_FULFILLED:

      return queryFulfilled(state, action)
    case CHANGE_FULFILLED:

      return changeFulfilled(state, action)
    case SUBMIT_FULFILLED:

      return submitFulfilled(state, action)
    case MOUNT_REJECTED:

      return mountRejected(state, action)
    case FETCH_REJECTED:

      return fetchRejected(state, action)
    case STORE_REJECTED:

      return storeRejected(state, action)
    case QUERY_REJECTED:

      return queryRejected(state, action)
    case CHANGE_REJECTED:

      return changeRejected(state, action)
    case SUBMIT_REJECTED:

      return submitRejected(state, action)
    case EMBARK_ROUTE:
    {
      const {
        redirect: resource = {}
      } = action

      return { ...STATE, resource }
    }
    case DEBARK_ROUTE:

      return { ...state, status: COMPLETE } // STATE
    default:

      return state
  }
}
