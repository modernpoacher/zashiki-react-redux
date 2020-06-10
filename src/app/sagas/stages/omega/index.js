import debug from 'debug'

import {
  call,
  put,
  take,
  race,
  select,
  takeLatest
} from 'redux-saga/effects'

import Signals from 'shinkansen-engine/lib/components/signals'

import {
  ROUTE,
  omegaRoute,

  MOUNT,
  mountRouteFulfilled,
  mountRouteRejected,

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
  submitStateFulfilled,
  submitStateRejected
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

import * as api from '@modernpoacher/zashiki-react-redux/api/stages/omega'

import { transformError } from '@modernpoacher/zashiki-react-redux/app/transformers'

import getPathname from '@modernpoacher/zashiki-react-redux/app/common/get-pathname'

const log = debug('zashiki-react-redux:app:sagas:stages:omega')

const {
  OMEGA
} = Signals

const getState = ({ [OMEGA]: omega = {} }) => omega
const hasStoreError = ({ [OMEGA]: omega = {} }) => ('error' in omega)
const hasQueryError = ({ [OMEGA]: omega = {} }) => ('error' in omega)

function * omegaRouteSaga ({ redirect, history }) {
  log('omegaRouteSaga')

  const pathname = getPathname(redirect)

  if (pathname) {
    const {
      location: {
        pathname: currentPathname
      } = {}
    } = history

    if (pathname !== currentPathname) history.push(pathname)
  }
}

function * mountRouteSaga ({ route }) {
  log('mountRouteSaga')

  try {
    const { data: response = {} } = yield call(api.mountRoute, route)
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

function * submitStateSaga ({ route, history }) {
  log('submitStateSaga')

  yield put(storeRoute(route, history))

  yield race([
    take(STORE_FULFILLED),
    take(STORE_REJECTED)
  ])

  const hasError = yield select(hasStoreError)

  if (hasError) {
    yield put(submitStateRejected())
  } else {
    yield put(queryRoute())

    yield race([
      take(QUERY_FULFILLED),
      take(QUERY_REJECTED)
    ])

    const hasError = yield select(hasQueryError)

    if (hasError) {
      yield put(submitStateRejected())
    } else {
      const state = yield select(getState)
      yield put(submitStateFulfilled(state))
      const { redirect, history } = state
      yield put(omegaRoute(redirect, history))
    }
  }
}

export function * watchOmegaRoute () {
  yield takeLatest(ROUTE, omegaRouteSaga)
}

export function * watchOmegaMount () {
  yield takeLatest(MOUNT, mountRouteSaga)
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
  yield takeLatest(SUBMIT, submitStateSaga)
}
