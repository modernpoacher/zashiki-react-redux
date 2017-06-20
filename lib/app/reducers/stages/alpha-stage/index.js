import {
  Boiler
} from 'react-boiler'

import {
  ZASHIKI_ALPHA_CHANGE,
  ZASHIKI_ALPHA_FETCH,
  ZASHIKI_ALPHA_STORE,
  ZASHIKI_ALPHA_QUERY
} from '../../../actions/stages/alpha-stage'

const {
  PENDING
} = Boiler
const STATE = {
  status: PENDING
}
const ACTION = {}

/**
 *  Zashiki/Alpha Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function alphaReducer (state = STATE, { type, r: { data } = {} } = ACTION) {
  switch (type) {
    case ZASHIKI_ALPHA_CHANGE:
      return { ...data }

    case ZASHIKI_ALPHA_FETCH:
      return { ...data }

    case ZASHIKI_ALPHA_STORE:
      return { ...data }

    case ZASHIKI_ALPHA_QUERY:
      return { ...data }

    default:
      return state
  }
}
