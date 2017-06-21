import {
  browserHistory
} from 'react-router'

import {
  Pantograph
} from 'shinkansen-pantograph'

export function zashikiMiddleware (store) {
  const last = (action) => (
    Pantograph.graphite({ store, action, history: browserHistory })
  )
  return (next) => (action) => (
    Promise.resolve(action)
      .then(next)
      .then(last)
  )
}
