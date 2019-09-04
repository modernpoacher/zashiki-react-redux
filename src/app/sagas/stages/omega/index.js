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

  omegaRoute
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

import * as api from '@modernpoacher/zashiki-react-redux/api/stages/omega'

const {
  OMEGA
} = Signals

const getState = ({ [OMEGA]: omega = {} }) => omega
const hasStoreError = ({ [OMEGA]: omega = {} }) => ('error' in omega)
const hasQueryError = ({ [OMEGA]: omega = {} }) => ('error' in omega)

function * changeRouteSaga ({ route }) {
  try {
    const { data: response = {} } = yield call(api.changeRoute, route)
    yield put(changeRouteFulfilled(response))
  } catch (e) {
    yield put(changeRouteRejected(Boom.badImplementation(e)))
  }
}

function * fetchRouteSaga ({ route }) {
  try {
    const { data: response = {} } = yield call(api.fetchRoute, route)
    yield put(fetchRouteFulfilled(response))
  } catch (e) {
    yield put(fetchRouteRejected(Boom.badImplementation(e)))
  }
}

function * storeRouteSaga ({ route }) {
  try {
    const { data: response = {} } = yield call(api.storeRoute, route)
    yield put(storeRouteFulfilled(response))
  } catch (e) {
    yield put(storeRouteRejected(Boom.badImplementation(e)))
  }
}

function * queryRouteSaga () {
  try {
    const { data: response = {} } = yield call(api.queryRoute)
    yield put(queryRouteFulfilled(response))
  } catch (e) {
    yield put(queryRouteRejected(Boom.badImplementation(e)))
  }
}

function * submitRouteSaga ({ route }) {
  yield put(storeRoute(route))

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
      yield put(omegaRoute(state))
    }
  }
}

export function * watchOmegaChange () {
  yield takeLatest(CHANGE, changeRouteSaga)
}

export function * watchOmegaFetch () {
  yield takeLatest(FETCH, fetchRouteSaga)
}

export function * watchOmegaStore () {
  yield takeLatest(STORE, storeRouteSaga)
}

export function * watchOmegaQuery () {
  yield takeLatest(QUERY, queryRouteSaga)
}

export function * watchOmegaSubmit () {
  yield takeLatest(SUBMIT, submitRouteSaga)
}
