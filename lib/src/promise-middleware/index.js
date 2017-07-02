/**
 * Redux middleware to handle action creators with or
 * without Promises and fire additional '_REQUEST' and
 * '_FAILURE' actions. It keeps our action creators
 * simple and synchronous too. Amazing.
 */
import { isPromise } from 'is-promise-like'

const TYPE = '@@promiseMiddleware/INIT'

export const promiseMiddleware = () => (next) => ({ promise, type = TYPE, ...rest }) => (
  isPromise(promise)
    ? promise
      .then((r) => (
        next({ ...rest, r, type })
      ))
      .catch((e) => (
        next({ ...rest, e, type: `${type}_FAILURE` })
      ))
    : next({ ...rest, type })
)
