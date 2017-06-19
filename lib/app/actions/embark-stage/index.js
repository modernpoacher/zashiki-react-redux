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
  ROUTE: ZASHIKI_EMBARK,
  FETCH: ZASHIKI_EMBARK_FETCH,
  STORE: ZASHIKI_EMBARK_STORE
} = Valves.EMBARK

/**
 * Action Types
 */
export {
  ZASHIKI_EMBARK,
  ZASHIKI_EMBARK_FETCH,
  ZASHIKI_EMBARK_STORE
}

/**
 * Action Creators
 */
export function embarkRoute (route) {
  return {
    type: ZASHIKI_EMBARK,
    promise: () => request.post('route-master/embark', route)
  }
}

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
