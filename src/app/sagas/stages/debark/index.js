import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import {
  Rails
} from 'shinkansen-rails'

import {
  ROUTE,
  debarkRoute,

  SUBMIT,
  submitRouteFulfilled,
  submitRouteRejected,

  FETCH,
  fetchRouteFulfilled,
  fetchRouteRejected,

  STORE,
  storeRouteFulfilled,
  storeRouteRejected
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

import * as api from '@modernpoacher/zashiki-react-redux/api/stages/debark'

import { transformError } from '@modernpoacher/zashiki-react-redux/app/transformers'

import getPathname from '@modernpoacher/zashiki-react-redux/app/common/get-pathname'

function * debarkRouteSaga ({ redirect, history }) {
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

function * submitRouteSaga ({ route: { statement }, history }) {
  try {
    yield storeRouteSaga({ response: { statement } })
    const { data: response = {} } = yield call(api.submitRoute, { response: { debark: Rails.rail(statement) } })
    yield put(submitRouteFulfilled(response))
    const { redirect } = response
    yield put(debarkRoute(redirect, history))
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

function * storeRouteSaga (route) {
  try {
    const { data: response = {} } = yield call(api.storeRoute, route)
    yield put(storeRouteFulfilled(response))
  } catch (e) {
    yield put(storeRouteRejected(transformError(e)))
  }
}

export function * watchDebarkRoute () {
  yield takeLatest(ROUTE, debarkRouteSaga)
}

export function * watchDebarkSubmit () {
  yield takeLatest(SUBMIT, submitRouteSaga)
}

export function * watchDebarkFetch () {
  yield takeLatest(FETCH, fetchRouteSaga)
}

export function * watchDebarkStore () {
  yield takeLatest(STORE, storeRouteSaga)
}
