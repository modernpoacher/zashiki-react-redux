/**
 * DebarkStage Actions
 */
import {
  request
} from '../../actions'

import {
  Valves
} from 'react-valves'

import {
  Gears
} from 'react-gears'

const {
  ROUTE: ZASHIKI_DEBARK,
  FETCH: ZASHIKI_DEBARK_FETCH,
  STORE: ZASHIKI_DEBARK_STORE
} = Valves.DEBARK

/**
 * Action Types
 */
export {
  ZASHIKI_DEBARK,
  ZASHIKI_DEBARK_FETCH,
  ZASHIKI_DEBARK_STORE
}

/**
 * Action Creators
 */
export function debarkRoute (route) {
  return {
    type: ZASHIKI_DEBARK,
    promise: () => request.post('route-master/debark', route)
  }
}

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
