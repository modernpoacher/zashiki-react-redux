import debug from 'debug'

import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import {
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

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
} from '#zashiki-react-redux/app/actions/stages/debark'

import * as api from '#zashiki-react-redux/api/stages/debark'

import {
  transformError
} from '#zashiki-react-redux/app/transformers'

import getPathname from '#zashiki-react-redux/app/common/get-pathname'

const log = debug('zashiki-react-redux/app/sagas/stages/embark')

log('`zashiki` is awake')

function transformData (data) {
  /*
   *  log('transformData')
   */

  if ('omega' in data) {
    const {
      omega = []
    } = data

    return Object.assign(data, {
      omega: omega.map((item) => {
        const {
          response,
          definition
        } = item

        return Object.assign(item, {
          response: fromDocumentToHash(response, definition)
        })
      })
    })
  }

  return data
}

function * debarkRouteSaga ({ redirect, router }) {
  /*
   *  log('debarkRouteSaga')
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

function * submitStateSaga ({ debark, router }) {
  /*
   *  log('submitStateSaga')
   */

  try {
    yield storeRouteSaga({ response: debark })
    const { data = {} } = yield call(api.submitState, { response: debark })
    yield put(submitStateFulfilled(transformData(data)))
    const { redirect } = data
    yield put(debarkRoute(redirect, router))
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
