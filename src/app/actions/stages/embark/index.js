/**
 * DebarkStage Actions
 */
import {
  request
} from '@modernpoacher/zashiki-react-redux/app/actions'

import {
  Pantograph
} from 'shinkansen-pantograph'

import {
  Rails
} from 'shinkansen-rails'

const {
  ERROR: ZASHIKI_EMBARK_ERROR,
  ROUTE: ZASHIKI_EMBARK,
  FETCH: ZASHIKI_EMBARK_FETCH,
  STORE: ZASHIKI_EMBARK_STORE
} = Pantograph.EMBARK

/**
 * Action Types
 */
export {
  ZASHIKI_EMBARK_ERROR,
  ZASHIKI_EMBARK,
  ZASHIKI_EMBARK_FETCH,
  ZASHIKI_EMBARK_STORE
}

/**
 * Action Creators
 */
function routeError (error) {
  return {
    type: ZASHIKI_EMBARK_ERROR,
    error
  }
}

function embarkRoute (route) {
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

export const fetch = () => async (dispatch) => {
  try {
    await dispatch(fetchRoute())
  } catch (e) {
    await dispatch(routeError(e))
  }
}

export const store = ({ statement }) => async (dispatch) => {
  try {
    await dispatch(storeRoute({ response: { statement } }))
  } catch (e) {
    await dispatch(routeError(e))
  }
}

export const submit = ({ statement }) => async (dispatch) => {
  try {
    await dispatch(storeRoute({ response: { statement } }))
    await dispatch(embarkRoute({ response: { embark: Rails.rail(statement) } }))
  } catch (e) {
    await dispatch(routeError(e))
  }
}
