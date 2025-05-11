import debug from '#zashiki-react-redux/debug'

import equal from 'fast-deep-equal'

import {
  PENDING,
  RESOLVED,
  REJECTED
} from '#zashiki-react-redux/app/common'

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
} from '#zashiki-react-redux/app/actions/stages/alpha'

import {
  ROUTE as EMBARK_ROUTE,
  FETCH as EMBARK_FETCH
} from '#zashiki-react-redux/app/actions/stages/embark'

import {
  ROUTE as DEBARK_ROUTE,
  FETCH as DEBARK_FETCH
} from '#zashiki-react-redux/app/actions/stages/debark'

import {
  MOUNT as OMEGA_MOUNT
} from '#zashiki-react-redux/app/actions/stages/omega'

import {
  MOUNT as ZASHIKI_MOUNT
} from '#zashiki-react-redux/app/actions/zashiki'

const log = debug('zashiki-react-redux/app/reducers/stages/alpha')

log('`zashiki` is awake')

const STATE = {
  status: PENDING
}

const ACTION = {}

/*
 *  Get all from state
 *  Add `redirect`
 */
export function route ({ status = PENDING, ...state } = {}, { router, redirect = {} } = {}) {
  /*
   *  log('route')
   */

  return Object.assign(state, { status }, (router ? { router } : {}), { redirect })
}

/*
 *  Get all from state
 *  Set `router` `route` from action
 */
export function mount ({ status = PENDING, ...state } = {}, { router, route = {} } = {}) {
  /*
   *  log('mount')
   */

  return Object.assign(state, { status }, (router ? { router } : {}), route)
}

/*
 *  Get all from state
 *  Set all from action
 */
export function fetch ({ status = PENDING, ...state } = {}, action = {}) {
  /*
   *  log('fetch')
   */

  return Object.assign(state, { status }, action)
}

/*
 *  Get `resource` from state
 *  Set `router` `route` from action
 */
export function store ({ status = PENDING, ...state } = {}, { router, route: { resource = {} } = {} } = {}) {
  /*
   *  log('store')
   */

  return Object.assign(state, { status }, (router ? { router } : {}), { resource })
}

/*
 *  Get all from state
 *  Add `redirect`
 */
export function query ({ status = PENDING, ...state } = {}, action = {}) {
  /*
   *  log('query')
   */

  return Object.assign(state, { status }, action)
}

/*
 *  Get all from state
 *  Set `router` `route` from action
 */
export function change ({ status = PENDING, omega = [], ...state } = {}, { router, route: { resource: RESOURCE = {}, response: RESPONSE = {} } = {} } = {}) {
  /*
   *  log('change')
   */

  /*
   *  It's cheaper and faster to change just one item but Redux won't see it
   *
   *  Instead, we change the whole array (as simply as possible)
   *
   *  Redux prefers an observable flat data structure
   */

  return Object.assign(state, {
    status
  },
  (router ? { router } : {}),
  {
    omega: omega.map((item) => {
      const {
        resource = {}
      } = item

      if (equal(resource, RESOURCE)) {
        const {
          response = {}
        } = item

        return Object.assign(item, { response: { ...response, ...RESPONSE } })
      }

      return item
    })
  })
}

/*
 *  Get all from state
 *  Set `router` `route` from action
 */
export function submit ({ status = PENDING, ...state } = {}, { router, route = {} } = {}) {
  /*
   *  log('submit')
   */

  return Object.assign(state, { status }, (router ? { router } : {}), route)
}

/*
 *  Not `redirect` from state
 */
export function mountFulfilled ({ omega, gears, state, router } = {}, { response = {} } = {}) {
  /*
   *  log('mountFulfilled')
   */

  return Object.assign({
    ...(omega ? { omega } : {}),
    ...(gears ? { gears } : {}),
    ...(state ? { state } : {}),
    ...(router ? { router } : {})
  },
  {
    errors: []
  },
  response,
  {
    status: RESOLVED
  })
}

export function fetchFulfilled ({ ...state } = {}, { response = {} } = {}) {
  /*
   *  log('fetchFulfilled')
   */

  return Object.assign(state, response, { status: RESOLVED })
}

export function storeFulfilled ({ ...state } = {}, { response = {} } = {}) {
  /*
   *  log('storeFulfilled')
   */

  return Object.assign(state, response, { status: RESOLVED })
}

export function queryFulfilled ({ ...state } = {}, { response: { errors = [], redirect = {} } = {} } = {}) {
  /*
   *  log('queryFulfilled')
   */

  return Object.assign(state, { errors, redirect, status: RESOLVED })
}

export function changeFulfilled ({ ...state } = {}, { response = {} } = {}) {
  /*
   *  log('changeFulfilled')
   */

  return Object.assign(state, response, { status: RESOLVED })
}

export function submitFulfilled ({ ...state } = {}, { response = {} } = {}) {
  /*
   *  log('submitFulfilled')
   */

  return Object.assign(state, response, { status: RESOLVED })
}

export function mountRejected ({ router } = {}, { error = {} } = {}) {
  /*
   *  log('mountRejected')
   */

  return Object.assign((router ? { router } : {}), { exception: error, status: REJECTED })
}

export function fetchRejected ({ router } = {}, { error = {} } = {}) {
  /*
   *  log('fetchRejected')
   */

  return Object.assign((router ? { router } : {}), { exception: error, status: REJECTED })
}

export function storeRejected ({ router } = {}, { error = {} } = {}) {
  /*
   *  log('storeRejected')
   */

  return Object.assign((router ? { router } : {}), { exception: error, status: REJECTED })
}

export function queryRejected ({ router } = {}, { error = {} } = {}) {
  /*
   *  log('queryRejected')
   */

  return Object.assign((router ? { router } : {}), { exception: error, status: REJECTED })
}

export function changeRejected ({ router } = {}, { error = {} } = {}) {
  /*
   *  log('changeRejected')
   */

  return Object.assign((router ? { router } : {}), { exception: error, status: REJECTED })
}

export function submitRejected ({ router } = {}, { error = {} } = {}) {
  /*
   *  log('submitRejected')
   */

  return Object.assign((router ? { router } : {}), { exception: error, status: REJECTED })
}

export function initialise (state = {}) {
  /*
   *  log('initialise')
   */

  return Object.assign(state, { status: RESOLVED })
}

/**
 *  Zashiki/Alpha Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function alphaReducer (state = { ...STATE }, { type, ...action } = { ...ACTION }) {
  /*
   *  log('alphaReducer')
   */

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
    case OMEGA_MOUNT:
    case ZASHIKI_MOUNT:

      return { ...STATE }
    default:

      return state
  }
}
