import {
  REJECTED
} from '#zashiki-react-redux/app/common'

export function transformError ({
  code,
  name = 'Application Error',
  message
} = {}) {
  return {
    ...(code ? { code } : {}),
    name,
    ...(message ? { message } : {})
  }
}

export function transformRejected (status = REJECTED, { exception = {} } = {}) {
  return {
    status,
    exception: transformError(exception)
  }
}

export * as stages from './stages/index.mjs'
