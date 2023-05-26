import debug from 'debug'

import {
  call,
  put,
  select,
  takeLatest
} from 'redux-saga/effects'

import Signals from 'shinkansen-engine/components/signals'
import Rails from 'shinkansen-engine/components/rails'
import {
  fromDocumentToHash,
  fromHashToDocument
} from 'shinkansen-engine/transformers/transmission'

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
} from '#app/actions/stages/embark'

import * as api from '#api/stages/embark'

import { transformError } from '#app/transformers'

import getPathname from '#app/common/get-pathname'

const log = debug('zashiki-react-redux/app/sagas/stages/embark')

log('`zashiki` is awake')

const {
  EMBARK
} = Signals

const getDefinition = ({ [EMBARK]: { definition } = {} }) => definition

function transformData (data) {
  if (Reflect.has(data, 'response')) {
    const {
      response,
      definition
    } = data

    return Object.assign(data, {
      response: fromDocumentToHash(response, definition)
    })
  }

  return data
}

function * embarkRouteSaga ({ redirect, history }) {
  /*
   *  log('embarkRouteSaga')
   */

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
  /*
   *  log('fetchRouteSaga')
   */

  try {
    const { data = {} } = yield call(api.fetchRoute)
    yield put(fetchRouteFulfilled(transformData(data)))
  } catch (e) {
    yield put(fetchRouteRejected(transformError(e)))
  }
}

function * storeRouteSaga (route) {
  /*
   *  log('storeRouteSaga')
   */

  try {
    const { data = {} } = yield call(api.storeRoute, route)
    yield put(storeRouteFulfilled(transformData(data)))
  } catch (e) {
    yield put(storeRouteRejected(transformError(e)))
  }
}

function * submitStateSaga ({ embark, history }) {
  /*
   *  log('submitStateSaga')
   */

  try {
    const definition = yield select(getDefinition)
    const {
      collection
    } = fromHashToDocument(embark, definition)

    yield storeRouteSaga({ response: { collection } })
    const { data = {} } = yield call(api.submitState, { response: { embark: Rails.rail(collection) } })
    yield put(submitStateFulfilled(transformData(data)))
    const { redirect } = data
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
