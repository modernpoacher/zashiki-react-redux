/**
 * DebarkStage Actions
 */
import {
  request
} from '../../actions'

import {
  Gears
} from 'react-gears/lib'

/**
 * Action Types
 */
export const ROUTE_MASTER_EMBARK_FETCH = 'ROUTE_MASTER_EMBARK_FETCH'
export const ROUTE_MASTER_EMBARK_STORE = 'ROUTE_MASTER_EMBARK_STORE'
export const ROUTE_MASTER_EMBARK = 'ROUTE_MASTER_EMBARK'

/**
 * Action Creators
 */
function fetchRoute () {
  return {
    type: ROUTE_MASTER_EMBARK_FETCH,
    promise: () => request.get('route-master/embark/fetch')
  }
}

function storeRoute (route) {
  return {
    type: ROUTE_MASTER_EMBARK_STORE,
    promise: () => request.put('route-master/embark/store', route)
  }
}

export function embarkRoute (route) {
  return {
    type: ROUTE_MASTER_EMBARK,
    promise: () => request.post('route-master/embark', route)
  }
}

export function fetch () {
  return (dispatch) => (
    dispatch(fetchRoute())
  )
}

export function store ({ statement }) {
  return (dispatch) => (
    dispatch(storeRoute({ response: { statement } }))
  )
  .then(() => (
    dispatch(embarkRoute({ response: { embark: Gears.part(statement) } })))
  )
}
