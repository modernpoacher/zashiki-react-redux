import debug from '#zashiki-react-redux/debug'

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
  confirmRoute,

  FETCH,
  fetchRouteFulfilled,
  fetchRouteRejected,

  STORE,
  storeRouteFulfilled,
  storeRouteRejected,

  SUBMIT,
  submitStateFulfilled,
  submitStateRejected
} from '#zashiki-react-redux/app/actions/stages/confirm'

import * as api from '#zashiki-react-redux/api/stages/confirm'

import {
  transformError
} from '#zashiki-react-redux/app/transformers'

import getPathname from '#zashiki-react-redux/app/common/get-pathname'

const log = debug('zashiki-react-redux/app/sagas/stages/confirm')

log('`zashiki` is awake')

const {
  CONFIRM
} = Signals

const getDefinition = ({ [CONFIRM]: { definition } = {} }) => definition

function transformData (data) {
  /*
   *  log('transformData')
   */

  if ('response' in data) {
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

function * confirmRouteSaga ({ redirect, router }) {
  /*
   *  log('confirmRouteSaga')
   */

  const pathname = getPathname(redirect)

  if (pathname) {
    const {
      location: {
        pathname: currentPathname
      } = {}
    } = router

    if (pathname !== currentPathname) {
      const {
        navigate
      } = router

      navigate(pathname)
    }
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

function * submitStateSaga ({ confirm, router }) {
  /*
   *  log('submitStateSaga')
   */

  try {
    const definition = yield select(getDefinition)
    const {
      collection
    } = fromHashToDocument(confirm, definition)

    yield storeRouteSaga({ response: { collection } })
    const { data = {} } = yield call(api.submitState, { response: { confirm: Rails.rail(collection) } })
    yield put(submitStateFulfilled(transformData(data)))
    const { redirect } = data
    yield put(confirmRoute(redirect, router))
  } catch (e) {
    yield put(submitStateRejected(transformError(e)))
  }
}

export function * watchConfirmRoute () {
  yield takeLatest(ROUTE, confirmRouteSaga)
}

export function * watchConfirmFetch () {
  yield takeLatest(FETCH, fetchRouteSaga)
}

export function * watchConfirmStore () {
  yield takeLatest(STORE, storeRouteSaga)
}

export function * watchConfirmSubmit () {
  yield takeLatest(SUBMIT, submitStateSaga)
}
