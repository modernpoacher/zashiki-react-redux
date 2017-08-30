/**
 * DebarkStage Actions
 */
import {
  request
} from 'zashiki-react-redux/app/actions'

import {
  Pantograph
} from 'shinkansen-pantograph'

import {
  Rails
} from 'shinkansen-rails'

const {
  ROUTE: ZASHIKI_EMBARK,
  FETCH: ZASHIKI_EMBARK_FETCH,
  STORE: ZASHIKI_EMBARK_STORE
} = Pantograph.EMBARK

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
    payload: {
      promise: request.post('zashiki/embark', route)
    }
  }
}

function fetchRoute () {
  return {
    type: ZASHIKI_EMBARK_FETCH,
    payload: {
      promise: request.get('zashiki/embark/fetch')
    }
  }
}

function storeRoute (route) {
  return {
    type: ZASHIKI_EMBARK_STORE,
    payload: {
      promise: request.put('zashiki/embark/store', route)
    }
  }
}

export const fetch = () => (dispatch) => dispatch(fetchRoute())

export const store = ({ statement }) => (dispatch) => dispatch(storeRoute({ response: { statement } }))
  .then(() => dispatch(embarkRoute({ response: { embark: Rails.part(statement) } })))
