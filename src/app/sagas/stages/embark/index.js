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

  embarkRoute
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

import * as api from '@modernpoacher/zashiki-react-redux/api/stages/embark'

function * fetchRoute () {
  console.log('fetchRoute')

  try {
    const { data: response = {} } = yield call(api.fetchRoute)
    yield put(fetchRouteFulfilled(response))
  } catch (e) {
    yield put(fetchRouteRejected(Boom.badImplementation(e)))
  }
}

function * storeRoute (route) {
  console.log('storeRoute', route)

  try {
    const { data: response = {} } = yield call(api.storeRoute, route)
    yield put(storeRouteFulfilled(response))
  } catch (e) {
    yield put(storeRouteRejected(Boom.badImplementation(e)))
  }
}

function * submitRoute ({ route: { statement }, history }) {
  console.log('submitRoute', statement, history)

  try {
    yield storeRoute({ response: { statement } })
    const { data: response = {} } = yield call(api.submitRoute, { response: { embark: Rails.rail(statement) } })
    yield put(submitRouteFulfilled(response))
    yield put(embarkRoute(response, history))
  } catch (e) {
    yield put(submitRouteRejected(Boom.badImplementation(e)))
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
