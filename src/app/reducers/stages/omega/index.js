import debug from 'debug'

import {
  PENDING,
  RESOLVED,
  REJECTED
} from '@modernpoacher/zashiki-react-redux/app/common'

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
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

import {
  ROUTE as EMBARK_ROUTE,
  FETCH as EMBARK_FETCH
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

import {
  ROUTE as DEBARK_ROUTE,
  FETCH as DEBARK_FETCH
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

import {
  MOUNT as ALPHA_MOUNT
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

import {
  MOUNT as ZASHIKI_MOUNT
} from '@modernpoacher/zashiki-react-redux/app/actions/zashiki'

const log = debug('zashiki-react-redux:app:reducers:stages:omega')

log('`omega` is awake')

const STATE = {
  status: PENDING
}

const ACTION = {}

/*
 *  Get all from state
 *  Add `redirect`
 */
export const route = ({ status = PENDING, ...state } = {}, { history, redirect = {} } = {}) => ({ ...state, status, history, redirect })

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const mount = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ ...state, status, history, ...route })

/*
 *  Get all from state
 *  Set all from action
 */
export const fetch = ({ status = PENDING, ...state } = {}, action = {}) => ({ ...state, status, ...action })

/*
 *  Get `resource` `response` from state
 *  Set `history` `route` from action
 */
export const store = ({ status = PENDING, ...state } = {}, { history, route: { resource = {} } = {} } = {}) => ({ ...state, status, history, resource })

/*
 *  Get all from state
 *  Add `redirect`
 */
export const query = ({ status = PENDING, ...state } = {}, action = {}) => ({ ...state, status, ...action })

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const change = ({ status = PENDING, response: RESPONSE, ...state } = {}, { history, route: { resource, response } = {} } = {}) => ({ ...state, status, history, resource, response: { ...RESPONSE, ...response } })

/*
 *  Get all from state
 *  Set `history` `route` from action
 */
export const submit = ({ status = PENDING, ...state } = {}, { history, route = {} } = {}) => ({ ...state, status, history, ...route })

/*
 *  Not `redirect` from state
 */
export function mountFulfilled ({ alpha, definition, gears, state, history } = {}, { response = {} } = {}) {
  log('mountFulfilled')

  return {
    ...(alpha ? { alpha } : {}),
    ...(definition ? { definition } : {}),
    ...(gears ? { gears } : {}),
    ...(state ? { state } : {}),
    ...(history ? { history } : {}),
    errors: [],
    resource: {},
    response: {},
    ...response,
    status: RESOLVED
  }
}

export function fetchFulfilled (state = {}, { response = {} } = {}) {
  log('fetchFulfilled')

  return { ...state, ...response, status: RESOLVED }
}

export function storeFulfilled (state = {}, { response = {} } = {}) {
  log('storeFulfilled')

  return { ...state, ...response, status: RESOLVED }
}

export function queryFulfilled (state = {}, { response: { redirect } = {} } = {}) { // `redirect`
  log('queryFulfilled')

  return { ...state, redirect, status: RESOLVED }
}

export function changeFulfilled (state = {}, { response = {} } = {}) {
  log('changeFulfilled')

  return { ...state, ...response, status: RESOLVED }
}

export function submitFulfilled (state = {}, { response = {} } = {}) {
  log('submitFulfilled')

  return { ...state, ...response, status: RESOLVED }
}

export function mountRejected ({ history } = {}, { error = {} } = {}) {
  log('mountRejected')

  return { ...(history ? { history } : {}), exception: { ...error }, status: REJECTED }
}

export function fetchRejected ({ history } = {}, { error = {} } = {}) {
  log('fetchRejected')

  return { ...(history ? { history } : {}), exception: { ...error }, status: REJECTED }
}

export function storeRejected ({ history } = {}, { error = {} } = {}) {
  log('storeRejected')

  return { ...(history ? { history } : {}), exception: { ...error }, status: REJECTED }
}

export function queryRejected ({ history } = {}, { error = {} } = {}) {
  log('queryRejected')

  return { ...(history ? { history } : {}), exception: { ...error }, status: REJECTED }
}

export function changeRejected ({ history } = {}, { error = {} } = {}) {
  log('changeRejected')

  return { ...(history ? { history } : {}), exception: { ...error }, status: REJECTED }
}

export function submitRejected ({ history } = {}, { error = {} } = {}) {
  log('submitRejected')

  return { ...(history ? { history } : {}), exception: { ...error }, status: REJECTED }
}

export const initialise = (state = {}) => ({ ...state, status: RESOLVED })

/**
 *  Zashiki/Omega Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function omegaReducer (state = { ...STATE }, { type, ...action } = { ...ACTION }) {
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
    case EMBARK_FETCH:
    case DEBARK_FETCH:
    case ALPHA_MOUNT:
    case ZASHIKI_MOUNT:

      return { ...STATE }
    default:

      return state
  }
}
