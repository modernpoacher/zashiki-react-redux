import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import Boom from '@hapi/boom'

import {
  CHANGE,
  changeRouteFulfilled,
  changeRouteRejected,

  FETCH,
  fetchRouteFulfilled,
  fetchRouteRejected,

  STORE,
  storeRouteFulfilled,
  storeRouteRejected,

  SUBMIT,
  submitRouteFulfilled,
  submitRouteRejected
} from '@modernpoacher/zashiki-react-redux/app/actions/zashiki'

import * as api from '@modernpoacher/zashiki-react-redux/api/zashiki'

function * changeRouteSaga ({ route, history }) {
  try {
    const { data: response = {} } = yield call(api.changeRoute, route, history)
    yield put(changeRouteFulfilled(response))
  } catch (e) {
    yield put(changeRouteRejected(Boom.badImplementation(e)))
  }
}

function * fetchRouteSaga ({ route, history }) {
  try {
    const { data: response = {} } = yield call(api.fetchRoute, route, history)
    yield put(fetchRouteFulfilled(response))
  } catch (e) {
    yield put(fetchRouteRejected(Boom.badImplementation(e)))
  }
}

function * storeRouteSaga ({ route, history }) {
  try {
    const { data: response = {} } = yield call(api.storeRoute, route, history)
    yield put(storeRouteFulfilled(response))
  } catch (e) {
    yield put(storeRouteRejected(Boom.badImplementation(e)))
  }
}

function * submitRouteSaga ({ route, history }) {
  try {
    const { data: response = {} } = yield call(api.submitRoute, route, history)
    yield put(submitRouteFulfilled(response))
  } catch (e) {
    yield put(submitRouteRejected(Boom.badImplementation(e)))
  }
}

export function * watchZashikiChange () {
  yield takeLatest(CHANGE, changeRouteSaga)
}

export function * watchZashikiFetch () {
  yield takeLatest(FETCH, fetchRouteSaga)
}

export function * watchZashikiStore () {
  yield takeLatest(STORE, storeRouteSaga)
}

export function * watchZashikiSubmit () {
  yield takeLatest(SUBMIT, submitRouteSaga)
}
