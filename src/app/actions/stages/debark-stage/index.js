/**
 * DebarkStage Actions
 */
import {
  request
} from '../../../actions'

import {
  Pantograph
} from 'shinkansen-pantograph'

import {
  Rails
} from 'shinkansen-rails'

const {
  ROUTE: ZASHIKI_DEBARK,
  FETCH: ZASHIKI_DEBARK_FETCH,
  STORE: ZASHIKI_DEBARK_STORE
} = Pantograph.DEBARK

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
    payload: {
      promise: request.post('zashiki/debark', route)
    }
  }
}

function fetchRoute () {
  return {
    type: ZASHIKI_DEBARK_FETCH,
    payload: {
      promise: request.get('zashiki/debark/fetch')
    }
  }
}

function storeRoute (route) {
  return {
    type: ZASHIKI_DEBARK_STORE,
    payload: {
      promise: request.put('zashiki/debark/store', route)
    }
  }
}

export const fetch = () => (dispatch) => dispatch(fetchRoute())

export const store = ({ statement }) => (dispatch) => dispatch(storeRoute({ response: { statement } }))
  .then(() => dispatch(debarkRoute({ response: { debark: Rails.part(statement) } })))
