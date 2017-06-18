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
export const ZASHIKI_EMBARK_FETCH = 'ZASHIKI_EMBARK_FETCH'
export const ZASHIKI_EMBARK_STORE = 'ZASHIKI_EMBARK_STORE'
export const ZASHIKI_EMBARK = 'ZASHIKI_EMBARK'

/**
 * Action Creators
 */
function fetchRoute () {
  return {
    type: ZASHIKI_EMBARK_FETCH,
    promise: () => request.get('route-master/embark/fetch')
  }
}

function storeRoute (route) {
  return {
    type: ZASHIKI_EMBARK_STORE,
    promise: () => request.put('route-master/embark/store', route)
  }
}

export function embarkRoute (route) {
  return {
    type: ZASHIKI_EMBARK,
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
