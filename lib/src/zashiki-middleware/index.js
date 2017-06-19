import {
  browserHistory
} from 'react-router'

import {
  Valves
} from 'react-valves'

export function zashikiMiddleware (store) {
  const last = (action) => (
    Valves.poppet({ store, action, history: browserHistory })
  )
  return (next) => (action) => (
    Promise.resolve(action)
      .then(next)
      .then(last)
  )
}
