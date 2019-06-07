import {
  Signals
} from 'shinkansen-signals'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

const transformEmbark = (status, {
  definition: schema,
  response: formData = {}
}) => ({
  definition: {
    ...(schema ? { schema, formData } : {})
  },
  status
})

export const transform = ({ status, ...embark }) => (status === Signals.FAILURE) ? transformFailure(status, embark) : transformEmbark(status, embark)
