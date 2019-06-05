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
  ERROR: ZASHIKI_DEBARK_ERROR,
  ROUTE: ZASHIKI_DEBARK,
  FETCH: ZASHIKI_DEBARK_FETCH,
  STORE: ZASHIKI_DEBARK_STORE
} = Pantograph.DEBARK

/**
 * Action Types
 */
export {
  ZASHIKI_DEBARK_ERROR,
  ZASHIKI_DEBARK,
  ZASHIKI_DEBARK_FETCH,
  ZASHIKI_DEBARK_STORE
}

/**
 * Action Creators
 */
function routeError (error) {
  return {
    type: ZASHIKI_DEBARK_ERROR,
    error
  }
}

function debarkRoute (route) {
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
    await dispatch(debarkRoute({ response: { debark: Rails.rail(statement) } }))
  } catch (e) {
    await dispatch(routeError(e))
  }
}
