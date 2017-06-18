/**
 * DebarkStage Actions
 */
import {
  request
} from '../../actions'

import {
  Gears
} from 'react-gears'

/**
 * Action Types
 */
export const ZASHIKI_DEBARK_FETCH = 'ZASHIKI_DEBARK_FETCH'
export const ZASHIKI_DEBARK_STORE = 'ZASHIKI_DEBARK_STORE'
export const ZASHIKI_DEBARK = 'ZASHIKI_DEBARK'

/**
 * Action Creators
 */
function fetchRoute () {
  return {
    type: ZASHIKI_DEBARK_FETCH,
    promise: () => request.get('route-master/debark/fetch')
  }
}

function storeRoute (route) {
  return {
    type: ZASHIKI_DEBARK_STORE,
    promise: () => request.put('route-master/debark/store', route)
  }
}

export function debarkRoute (route) {
  return {
    type: ZASHIKI_DEBARK,
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
