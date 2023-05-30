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
} from '@modernpoacher/zashiki-react-redux/app/actions/zashiki'

import * as api from '@modernpoacher/zashiki-react-redux/api/zashiki'

import { transformError } from '@modernpoacher/zashiki-react-redux/app/transformers'

const log = debug('zashiki-react-redux/app/sagas/zashiki')

log('`zashiki` is awake')

function * mountRouteSaga ({ route }) {
  /*
   *  log('mountRouteSaga')
   */

  try {
    const { data = {} } = yield call(api.changeRoute, route)
    yield put(mountRouteFulfilled(data))
  } catch (e) {
    yield put(mountRouteRejected(transformError(e)))
  }
}

function * fetchRouteSaga () {
  /*
   *  log('fetchRouteSaga')
   */

  try {
    const { data = {} } = yield call(api.fetchRoute)
    yield put(fetchRouteFulfilled(data))
  } catch (e) {
    yield put(fetchRouteRejected(transformError(e)))
  }
}

function * storeRouteSaga ({ route }) {
  /*
   *  log('storeRouteSaga')
   */

  try {
    const { data = {} } = yield call(api.storeRoute, route)
    yield put(storeRouteFulfilled(data))
  } catch (e) {
    yield put(storeRouteRejected(transformError(e)))
  }
}

function * queryRouteSaga () {
  /*
   *  log('queryRouteSaga')
   */

  try {
    const { data = {} } = yield call(api.queryRoute)
    yield put(queryRouteFulfilled(data))
  } catch (e) {
    yield put(queryRouteRejected(transformError(e)))
  }
}

function * submitRouteSaga ({ route }) {
  /*
   *  log('submitRouteSaga')
   */

  try {
    const { data = {} } = yield call(api.submitRoute, route)
    yield put(submitRouteFulfilled(data))
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
