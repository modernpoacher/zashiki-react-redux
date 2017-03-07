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
export const ROUTE_MASTER_DEBARK_FETCH = 'ROUTE_MASTER_DEBARK_FETCH'
export const ROUTE_MASTER_DEBARK_STORE = 'ROUTE_MASTER_DEBARK_STORE'
export const ROUTE_MASTER_DEBARK = 'ROUTE_MASTER_DEBARK'

/**
 * Action Creators
 */
function fetchRoute () {
  return {
    type: ROUTE_MASTER_DEBARK_FETCH,
    promise: () => request.get('route-master/debark/fetch')
  }
}

function storeRoute (route) {
  return {
    type: ROUTE_MASTER_DEBARK_STORE,
    promise: () => request.put('route-master/debark/store', route)
  }
}

export function debarkRoute (route) {
  return {
    type: ROUTE_MASTER_DEBARK,
    promise: () => request.post('route-master/debark', route)
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
    dispatch(debarkRoute({ response: { debark: Gears.part(statement) } })))
  )
}
