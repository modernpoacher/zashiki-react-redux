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
  queryRouteRejected
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

import * as api from '@modernpoacher/zashiki-react-redux/api/stages/omega'

import { transformError } from '@modernpoacher/zashiki-react-redux/app/transformers'

import getPathname from '@modernpoacher/zashiki-react-redux/app/common/get-pathname'

const {
  OMEGA
} = Signals

const getState = ({ [OMEGA]: omega = {} }) => omega
const hasStoreError = ({ [OMEGA]: omega = {} }) => ('error' in omega)
const hasQueryError = ({ [OMEGA]: omega = {} }) => ('error' in omega)

function * omegaRouteSaga ({ redirect, history }) {
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

function * changeRouteSaga ({ route }) {
  try {
    const { data: response = {} } = yield call(api.changeRoute, route)
    yield put(changeRouteFulfilled(response))
  } catch (e) {
    yield put(changeRouteRejected(transformError(e)))
  }
}

function * submitRouteSaga ({ route, history }) {
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
      yield put(omegaRoute(redirect, history))
    }
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

export function * watchOmegaRoute () {
  yield takeLatest(ROUTE, omegaRouteSaga)
}

export function * watchOmegaChange () {
  yield takeLatest(CHANGE, changeRouteSaga)
}

export function * watchOmegaSubmit () {
  yield takeLatest(SUBMIT, submitRouteSaga)
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
