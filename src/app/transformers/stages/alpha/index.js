import {
  Signals
} from 'shinkansen-signals'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

const transformAlpha = (status, {
  omega = [],
  resource,
  gears = {
    reverse: {},
    forward: {}
  },
  state = {
    index: 0,
    count: 0
  }
}) => ({
  definitions: omega.map(({
    resource,
    definition: schema,
    response: formData = {}
  }) => ({
    ...(resource ? { resource } : {}),
    definition: {
      ...(schema ? { schema, formData } : {})
    }
  })),
  ...(resource ? { resource } : {}),
  gears,
  state,
  status
})

export const transform = ({ status, ...alpha }) => (status === Signals.FAILURE) ? transformFailure(status, alpha) : transformAlpha(status, alpha)
