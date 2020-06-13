import {
  REJECTED
} from '@modernpoacher/zashiki-react-redux/app/common'

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

export const transformRejected = (status = REJECTED, { exception = {} } = {}) => ({ status, exception: transformError(exception) })

export * as stages from './stages'
