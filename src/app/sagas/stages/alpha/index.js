import {
  call,
  put,
  take,
  race,
  select,
  takeLatest
} from 'redux-saga/effects'

import Boom from '@hapi/boom'

import {
  Signals
} from 'shinkansen-signals'

import {
  CHANGE,
  changeRouteFulfilled,
  changeRouteRejected,

  FETCH,
  fetchRouteFulfilled,
  fetchRouteRejected,

  STORE,
  STORE_FULFILLED,
  STORE_REJECTED,
  storeRoute,
  storeRouteFulfilled,
  storeRouteRejected,

  QUERY,
  QUERY_FULFILLED,
  QUERY_REJECTED,
  queryRoute,
  queryRouteFulfilled,
  queryRouteRejected,

  SUBMIT,
  submitRouteFulfilled,
  submitRouteRejected,

  alphaRoute
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

import * as api from '@modernpoacher/zashiki-react-redux/api/stages/alpha'

const {
  ALPHA
} = Signals

const getState = ({ [ALPHA]: alpha = {} }) => alpha
const hasStoreError = ({ [ALPHA]: alpha = {} }) => ('error' in alpha)
const hasQueryError = ({ [ALPHA]: alpha = {} }) => ('error' in alpha)

function * changeRouteSaga ({ route }) {
  console.log('changeRouteSaga', route)

  try {
    const { data: response = {} } = yield call(api.changeRoute, route)
    yield put(changeRouteFulfilled(response))
  } catch (e) {
    yield put(changeRouteRejected(Boom.badImplementation(e)))
  }
}

function * fetchRouteSaga () {
  console.log('fetchRouteSaga')

  try {
    const { data: response = {} } = yield call(api.fetchRoute)
    yield put(fetchRouteFulfilled(response))
  } catch (e) {
    yield put(fetchRouteRejected(Boom.badImplementation(e)))
  }
}

function * storeRouteSaga ({ route }) {
  console.log('storeRouteSaga', route)

  try {
    const { data: response = {} } = yield call(api.storeRoute, route)
    yield put(storeRouteFulfilled(response))
  } catch (e) {
    yield put(storeRouteRejected(Boom.badImplementation(e)))
  }
}

function * queryRouteSaga () {
  console.log('queryRouteSaga')

  try {
    const { data: response = {} } = yield call(api.queryRoute)
    yield put(queryRouteFulfilled(response))
  } catch (e) {
    yield put(queryRouteRejected(Boom.badImplementation(e)))
  }
}

function * submitRouteSaga ({ route, history }) {
  console.log('submitRouteSaga', route, history)

  yield put(storeRoute(route, history))

  yield race([
    take(STORE_FULFILLED),
    take(STORE_REJECTED)
  ])

  const hasError = yield select(hasStoreError)

  if (hasError) {
    yield put(submitRouteRejected())
  } else {
    yield put(queryRoute())

    yield race([
      take(QUERY_FULFILLED),
      take(QUERY_REJECTED)
    ])

    const hasError = yield select(hasQueryError)

    if (hasError) {
      yield put(submitRouteRejected())
    } else {
      const state = yield select(getState)
      yield put(submitRouteFulfilled(state))
      const { redirect, history } = state
      yield put(alphaRoute(redirect, history))
    }
  }
}

export function * watchAlphaChange () {
  yield takeLatest(CHANGE, changeRouteSaga)
}

export function * watchAlphaFetch () {
  yield takeLatest(FETCH, fetchRouteSaga)
}

export function * watchAlphaStore () {
  yield takeLatest(STORE, storeRouteSaga)
}

export function * watchAlphaQuery () {
  yield takeLatest(QUERY, queryRouteSaga)
}

export function * watchAlphaSubmit () {
  yield takeLatest(SUBMIT, submitRouteSaga)
}
