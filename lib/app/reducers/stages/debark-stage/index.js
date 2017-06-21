import {
  Boiler
} from 'shinkansen-boiler'

import {
  ZASHIKI_DEBARK_FETCH,
  ZASHIKI_DEBARK_STORE,
  ZASHIKI_DEBARK
} from '../../../actions/stages/debark-stage'

const {
  PENDING,
  COMPLETE
} = Boiler
const STATE = {
  status: PENDING
}
const ACTION = {}

/**
 *  DebarkStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function debarkReducer (state = STATE, { type, r: { data } = {} } = ACTION) {
  switch (type) {
    case ZASHIKI_DEBARK_FETCH:
      return { ...data }

    case ZASHIKI_DEBARK_STORE:
      return { ...data }

    case ZASHIKI_DEBARK:
      return {
        status: COMPLETE,
        ...data
      }

    default:
      return state
  }
}
