/**
 * Redux middleware to handle action creators with or
 * without Promises and fire additional '_REQUEST' and
 * '_FAILURE' actions. It keeps our action creators
 * simple and synchronous too. Amazing.
 */
export const promiseMiddleware = () => (next) => ({ promise, type, ...rest }) => {
  if (promise) {
    const SUCCESS = type
    const REQUEST = type + '_REQUEST'
    const FAILURE = type + '_FAILURE'

    next({ ...rest, type: REQUEST })

    return promise()
      .then((r) => (
        next({ ...rest, r, type: SUCCESS })
      ))
      .catch((e) => (
        next({ ...rest, e, type: FAILURE })
      ))
  } else {
    return next({ ...rest, type })
  }
}
