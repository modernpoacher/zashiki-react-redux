import {
  Steam
} from 'react-steam'

import {
  ZASHIKI_CHANGE,
  ZASHIKI_FETCH,
  ZASHIKI_STORE,
  ZASHIKI_QUERY
} from '../../actions/zashiki'

const {
  PENDING
} = Steam
const STATE = {
  status: PENDING
}
const ACTION = {}

/**
 *  Zashiki Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function zashikiReducer (state = STATE, { type, r: { data } = {} } = ACTION) {
  switch (type) {
    case ZASHIKI_CHANGE:
      return { ...data }

    case ZASHIKI_FETCH:
      return { ...data }

    case ZASHIKI_STORE:
      return { ...data }

    case ZASHIKI_QUERY:
      return { ...data }

    default:
      return state
  }
}
