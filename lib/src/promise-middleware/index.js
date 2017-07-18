import { isPromiseLike as isPromise } from 'is-promise-like'

export const PENDING = 'PENDING'
export const FULFILLED = 'FULFILLED'
export const REJECTED = 'REJECTED'

const defaultTypes = [
  PENDING,
  FULFILLED,
  REJECTED
]

const isDefined = (value) => value !== undefined
const isError = (value) => (value || false) instanceof Error
const isPayload = (value) => isDefined(value) && value !== null

const hasExplicitPromise = ({ promise } = {}) => isPromise(promise)
const hasImplicitPromise = (promise) => isPromise(promise)
const hasPromise = (object) => hasImplicitPromise(object) || hasExplicitPromise(object)

const getExplicitPromise = ({ promise } = {}) => promise
const getImplicitPromise = (promise) => promise // eslint-disable-line
const getPromise = (object) => hasImplicitPromise(object) ? object : getExplicitPromise(object)

/**
 * @function promiseMiddleware
 * @description
 * @returns {function} thunk
 */
export function promiseMiddleware ({ types = defaultTypes } = {}) {
  return ({ dispatch }) => (next) => (action) => {
    const { payload } = action

    if (hasPromise(payload)) {
      const { type } = action
      const { data } = payload
      const [
        PENDING_SUFFIX,
        FULFILLED_SUFFIX,
        REJECTED_SUFFIX
      ] = types
      const promise = getPromise(payload)

      /**
       * Dispatch the pending action. This flux standard action object
       * describes the pending state of a promise and will include any data
       * (for optimistic updates) and/or meta from the original action.
       */
      next({
        ...action,
        type: `${type}_${PENDING_SUFFIX}`,
        ...(isDefined(data) ? { payload: data } : {})
      })

      /**
       * @function getAction
       * @description Create a rejected or fulfilled flux standard action object.
       * @param {boolean} Is the action rejected?
       * @returns {object} action
       */
      const getAction = (payload, isRejected) => ({ // eslint-disable-line
        ...action,
        type: isRejected ? `${type}_${REJECTED_SUFFIX}` : `${type}_${FULFILLED_SUFFIX}`,
        ...(isPayload(payload) ? { payload } : {}),
        ...(isRejected ? { error: true } : {})
      })

      return promise
        .then((value) => (
          dispatch(getAction(value))
            .catch((reason) => reason)
        ))
        .catch((reason) => (
          dispatch(getAction(reason, isError(reason)))
            .catch((reason) => reason)
        ))
        .then((v) => isError(v) ? Promise.reject(v) : v)
    } else {
      return next(({
        ...action,
        ...(isDefined(payload) ? { payload } : {})
      }))
    }
  }
}
