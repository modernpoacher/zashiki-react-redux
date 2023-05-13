import debug from 'debug'

import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import {
  MOUNT,
  mountRouteFulfilled,
  mountRouteRejected,

  FETCH,
  fetchRouteFulfilled,
  fetchRouteRejected,

  STORE,
  storeRouteFulfilled,
  storeRouteRejected,

  QUERY,
  queryRouteFulfilled,
  queryRouteRejected,

  SUBMIT,
  submitRouteFulfilled,
  submitRouteRejected
} from '#app/actions/zashiki'

import * as api from '#api/zashiki'

import { transformError } from '#app/transformers'

const log = debug('zashiki-react-redux:app:sagas:zashiki')

function * mountRouteSaga ({ route }) {
  log('mountRouteSaga')

  try {
    const { data: response = {} } = yield call(api.changeRoute, route)
    yield put(mountRouteFulfilled(response))
  } catch (e) {
    yield put(mountRouteRejected(transformError(e)))
  }
}

function * fetchRouteSaga () {
  log('fetchRouteSaga')

  try {
    const { data: response = {} } = yield call(api.fetchRoute)
    yield put(fetchRouteFulfilled(response))
  } catch (e) {
    yield put(fetchRouteRejected(transformError(e)))
  }
}

function * storeRouteSaga ({ route }) {
  log('storeRouteSaga')

  try {
    const { data: response = {} } = yield call(api.storeRoute, route)
    yield put(storeRouteFulfilled(response))
  } catch (e) {
    yield put(storeRouteRejected(transformError(e)))
  }
}

function * queryRouteSaga () {
  log('queryRouteSaga')

  try {
    const { data: response = {} } = yield call(api.queryRoute)
    yield put(queryRouteFulfilled(response))
  } catch (e) {
    yield put(queryRouteRejected(transformError(e)))
  }
}

function * submitRouteSaga ({ route }) {
  log('submitRouteSaga')

  try {
    const { data: response = {} } = yield call(api.submitRoute, route)
    yield put(submitRouteFulfilled(response))
  } catch (e) {
    yield put(submitRouteRejected(transformError(e)))
  }
}

export function * watchZashikiMount () {
  yield takeLatest(MOUNT, mountRouteSaga)
}

export function * watchZashikiFetch () {
  yield takeLatest(FETCH, fetchRouteSaga)
}

export function * watchZashikiStore () {
  yield takeLatest(STORE, storeRouteSaga)
}

export function * watchZashikiQuery () {
  yield takeLatest(QUERY, queryRouteSaga)
}

export function * watchZashikiSubmit () {
  yield takeLatest(SUBMIT, submitRouteSaga)
}
