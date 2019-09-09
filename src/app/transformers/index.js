import {
  Signals
} from 'shinkansen-signals'

export const transformError = ({
  code = 500,
  name = 'Internal Server Error',
  message
} = {}) => ({
  code,
  name,
  ...(
    message ? { message } : {}
  )
})

export const transformFailure = (status = Signals.FAILURE, { exception = {} } = {}) => ({ status, exception: transformError(exception) })

export * as stages from './stages'
