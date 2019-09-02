import {
  Signals
} from 'shinkansen-signals'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

const transformOmega = (status, {
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
  definition: {
    ...(schema ? { schema, formData } : {})
  },
  ...(resource ? { resource } : {}),
  gears,
  state,
  status
})

export const transform = ({ status, ...omega }) => (status === Signals.FAILURE) ? transformFailure(status, omega) : transformOmega(status, omega)
