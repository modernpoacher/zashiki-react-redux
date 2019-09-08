import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import Boom from '@hapi/boom'

import {
  Rails
} from 'shinkansen-rails'

import {
  FETCH,
  fetchRouteFulfilled,
  fetchRouteRejected,

  STORE,
  storeRouteFulfilled,
  storeRouteRejected,

  SUBMIT,
  submitRouteFulfilled,
  submitRouteRejected,

  ROUTE,
  embarkRoute
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

import * as api from '@modernpoacher/zashiki-react-redux/api/stages/embark'

import getPathname from '@modernpoacher/zashiki-react-redux/app/common/get-pathname'

function * fetchRoute () {
  try {
    const { data: response = {} } = yield call(api.fetchRoute)
    yield put(fetchRouteFulfilled(response))
  } catch (e) {
    yield put(fetchRouteRejected(Boom.badImplementation(e)))
  }
}

function * storeRoute (route) {
  try {
    const { data: response = {} } = yield call(api.storeRoute, route)
    yield put(storeRouteFulfilled(response))
  } catch (e) {
    yield put(storeRouteRejected(Boom.badImplementation(e)))
  }
}

function * submitRoute ({ route: { statement }, history }) {
  try {
    yield storeRoute({ response: { statement } })
    const { data: response = {} } = yield call(api.submitRoute, { response: { embark: Rails.rail(statement) } })
    yield put(submitRouteFulfilled(response))
    const { redirect } = response
    yield put(embarkRoute(redirect, history))
  } catch (e) {
    yield put(submitRouteRejected(Boom.badImplementation(e)))
  }
}

function * embarkRouteSaga ({ redirect, history }) {
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

export function * watchEmbarkFetch () {
  yield takeLatest(FETCH, fetchRoute)
}

export function * watchEmbarkStore () {
  yield takeLatest(STORE, storeRoute)
}

export function * watchEmbarkSubmit () {
  yield takeLatest(SUBMIT, submitRoute)
}

export function * watchEmbarkRoute () {
  yield takeLatest(ROUTE, embarkRouteSaga)
}
