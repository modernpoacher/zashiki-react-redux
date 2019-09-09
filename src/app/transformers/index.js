import {
  Signals
} from 'shinkansen-signals'

export const transformError = ({
  code,
  name = 'Application Error',
  message
} = {}) => ({
  ...(
    code ? { code } : {}
  ),
  name,
  ...(
    message ? { message } : {}
  )
})

export const transformFailure = (status = Signals.FAILURE, { exception = {} } = {}) => ({ status, exception: transformError(exception) })

export * as stages from './stages'
