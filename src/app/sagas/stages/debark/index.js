import debug from 'debug'

import {
  call,
  put,
  select,
  takeLatest
} from 'redux-saga/effects'

import Signals from 'shinkansen-engine/lib/components/signals'
import Rails from 'shinkansen-engine/lib/components/rails'
import {
  fromDocumentToHash,
  fromHashToDocument
} from 'shinkansen-engine/lib/transformers/transmission'

import {
  ROUTE,
  debarkRoute,

  FETCH,
  fetchRouteFulfilled,
  fetchRouteRejected,

  STORE,
  storeRouteFulfilled,
  storeRouteRejected,

  SUBMIT,
  submitStateFulfilled,
  submitStateRejected
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

import * as api from '@modernpoacher/zashiki-react-redux/api/stages/debark'

import { transformError } from '@modernpoacher/zashiki-react-redux/app/transformers'

import getPathname from '@modernpoacher/zashiki-react-redux/app/common/get-pathname'

const log = debug('zashiki-react-redux:app:sagas:stages:embark')

const {
  DEBARK
} = Signals

const getDefinition = ({ [DEBARK]: { definition } = {} }) => definition

function transformData (data) {
  if (Reflect.has(data, 'response')) {
    const {
      response,
      definition
    } = data

    return {
      ...data,
      response: fromDocumentToHash(response, definition)
    }
  }

  return data
}

function * debarkRouteSaga ({ redirect, history }) {
  log('debarkRouteSaga')

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
    const { data = {} } = yield call(api.fetchRoute)
    yield put(fetchRouteFulfilled(transformData(data)))
  } catch (e) {
    yield put(fetchRouteRejected(transformError(e)))
  }
}

function * storeRouteSaga (route) {
  log('storeRouteSaga')

  try {
    const { data = {} } = yield call(api.storeRoute, route)
    yield put(storeRouteFulfilled(transformData(data)))
  } catch (e) {
    yield put(storeRouteRejected(transformError(e)))
  }
}

function * submitStateSaga ({ debark, history }) {
  log('submitStateSaga')

  try {
    const definition = yield select(getDefinition)
    const {
      statement
    } = fromHashToDocument(definition, debark)

    yield storeRouteSaga({ response: { statement } })
    const { data = {} } = yield call(api.submitState, { response: { debark: Rails.rail(statement) } })
    yield put(submitStateFulfilled(transformData(data)))
    const { redirect } = data
    yield put(debarkRoute(redirect, history))
  } catch (e) {
    yield put(submitStateRejected(transformError(e)))
  }
}

export function * watchDebarkRoute () {
  yield takeLatest(ROUTE, debarkRouteSaga)
}

export function * watchDebarkFetch () {
  yield takeLatest(FETCH, fetchRouteSaga)
}

export function * watchDebarkStore () {
  yield takeLatest(STORE, storeRouteSaga)
}

export function * watchDebarkSubmit () {
  yield takeLatest(SUBMIT, submitStateSaga)
}
