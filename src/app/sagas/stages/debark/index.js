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

  debarkRoute
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

import * as api from '@modernpoacher/zashiki-react-redux/api/stages/debark'

function * fetchRoute (route) {
  try {
    const { data: response = {} } = yield call(api.fetchRoute, route)
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

function * submitRoute ({ route: { statement } }) {
  try {
    yield storeRoute({ response: { statement } })
    const { data: response = {} } = yield call(api.submitRoute, { response: { debark: Rails.rail(statement) } })
    yield put(submitRouteFulfilled(response))
    yield put(debarkRoute(response))
  } catch (e) {
    yield put(submitRouteRejected(Boom.badImplementation(e)))
  }
}

export function * watchDebarkFetch () {
  yield takeLatest(FETCH, fetchRoute)
}

export function * watchDebarkStore () {
  yield takeLatest(STORE, storeRoute)
}

export function * watchDebarkSubmit () {
  yield takeLatest(SUBMIT, submitRoute)
}
