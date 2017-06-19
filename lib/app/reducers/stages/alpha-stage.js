import {
  Steam
} from 'react-steam'

import {
  ZASHIKI_ALPHA_CHANGE,
  ZASHIKI_ALPHA_FETCH,
  ZASHIKI_ALPHA_STORE,
  ZASHIKI_ALPHA_QUERY
} from '../../actions/stages/alpha-stage'

const {
  PENDING
} = Steam
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
export default function zashikiAlphaReducer (state = STATE, { type, r: { data } = {} } = ACTION) {
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
