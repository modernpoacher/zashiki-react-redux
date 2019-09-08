import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import {
  CHANGE,
  changeRouteFulfilled,
  changeRouteRejected,

  SUBMIT,
  submitRouteFulfilled,
  submitRouteRejected,

  FETCH,
  fetchRouteFulfilled,
  fetchRouteRejected,

  STORE,
  storeRouteFulfilled,
  storeRouteRejected,

  QUERY,
  queryRouteFulfilled,
  queryRouteRejected
} from '@modernpoacher/zashiki-react-redux/app/actions/zashiki'

import * as api from '@modernpoacher/zashiki-react-redux/api/zashiki'

import { transformError } from '@modernpoacher/zashiki-react-redux/app/transformers'

function * changeRouteSaga ({ route }) {
  try {
    const { data: response = {} } = yield call(api.changeRoute, route)
    yield put(changeRouteFulfilled(response))
  } catch (e) {
    yield put(changeRouteRejected(transformError(e)))
  }
}

function * submitRouteSaga ({ route }) {
  try {
    const { data: response = {} } = yield call(api.submitRoute, route)
    yield put(submitRouteFulfilled(response))
  } catch (e) {
    yield put(submitRouteRejected(transformError(e)))
  }
}

function * fetchRouteSaga () {
  try {
    const { data: response = {} } = yield call(api.fetchRoute)
    yield put(fetchRouteFulfilled(response))
  } catch (e) {
    yield put(fetchRouteRejected(transformError(e)))
  }
}

function * storeRouteSaga ({ route }) {
  try {
    const { data: response = {} } = yield call(api.storeRoute, route)
    yield put(storeRouteFulfilled(response))
  } catch (e) {
    yield put(storeRouteRejected(transformError(e)))
  }
}

function * queryRouteSaga () {
  try {
    const { data: response = {} } = yield call(api.queryRoute)
    yield put(queryRouteFulfilled(response))
  } catch (e) {
    yield put(queryRouteRejected(transformError(e)))
  }
}

export function * watchZashikiChange () {
  yield takeLatest(CHANGE, changeRouteSaga)
}

export function * watchZashikiSubmit () {
  yield takeLatest(SUBMIT, submitRouteSaga)
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
