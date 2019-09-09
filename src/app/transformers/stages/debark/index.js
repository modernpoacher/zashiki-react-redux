import {
  Signals
} from 'shinkansen-signals'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

const transformDebark = (status, {
  definition: schema,
  response: formData = {}
}) => ({
  definition: {
    ...(schema ? { schema, formData } : {})
  },
  status
})

export const transform = ({ status, ...debark }) => (status === Signals.FAILURE) ? transformFailure(status, debark) : transformDebark(status, debark)
