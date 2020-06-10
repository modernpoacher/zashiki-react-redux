import debug from 'debug'

import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import Rails from 'shinkansen-engine/lib/components/rails'

import {
  ROUTE,
  embarkRoute,

  FETCH,
  fetchRouteFulfilled,
  fetchRouteRejected,

  STORE,
  storeRouteFulfilled,
  storeRouteRejected,

  SUBMIT,
  submitStateFulfilled,
  submitStateRejected
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

import * as api from '@modernpoacher/zashiki-react-redux/api/stages/embark'

import { transformError } from '@modernpoacher/zashiki-react-redux/app/transformers'

import getPathname from '@modernpoacher/zashiki-react-redux/app/common/get-pathname'

const log = debug('zashiki-react-redux:app:sagas:stages:embark')

function * embarkRouteSaga ({ redirect, history }) {
  log('embarkRouteSaga')

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

function * fetchRouteSaga () {
  log('fetchRouteSaga')

  try {
    const { data: response = {} } = yield call(api.fetchRoute)
    yield put(fetchRouteFulfilled(response))
  } catch (e) {
    yield put(fetchRouteRejected(transformError(e)))
  }
}

function * storeRouteSaga (route) {
  log('storeRouteSaga')

  try {
    const { data: response = {} } = yield call(api.storeRoute, route)
    yield put(storeRouteFulfilled(response))
  } catch (e) {
    yield put(storeRouteRejected(transformError(e)))
  }
}

function * submitStateSaga ({ embark: { statement }, history }) {
  log('submitStateSaga')

  try {
    yield storeRouteSaga({ response: { statement } })
    const { data: response = {} } = yield call(api.submitState, { response: { embark: Rails.rail(statement) } })
    yield put(submitStateFulfilled(response))
    const { redirect } = response
    yield put(embarkRoute(redirect, history))
  } catch (e) {
    yield put(submitStateRejected(transformError(e)))
  }
}

export function * watchEmbarkRoute () {
  yield takeLatest(ROUTE, embarkRouteSaga)
}

export function * watchEmbarkFetch () {
  yield takeLatest(FETCH, fetchRouteSaga)
}

export function * watchEmbarkStore () {
  yield takeLatest(STORE, storeRouteSaga)
}

export function * watchEmbarkSubmit () {
  yield takeLatest(SUBMIT, submitStateSaga)
}
