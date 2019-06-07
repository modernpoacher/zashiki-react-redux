import {
  Signals
} from 'shinkansen-signals'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

const transformOmega = (status, {
  alpha = {},
  resource,
  definition: schema,
  response: formData = {},
  gears = {
    reverse: {},
    forward: {}
  },
  state = {
    index: 0,
    count: 0
  }
}) => ({
  alpha,
  ...(resource ? { resource } : {}),
  definition: {
    ...(schema ? { schema, formData } : {})
  },
  gears,
  state,
  status
})

export const transform = ({ status, ...omega }) => (status === Signals.FAILURE) ? transformFailure(status, omega) : transformOmega(status, omega)
