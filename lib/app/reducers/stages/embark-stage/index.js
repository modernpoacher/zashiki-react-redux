import {
  Signals
} from 'shinkansen-signals'

import {
  ZASHIKI_EMBARK_FETCH,
  ZASHIKI_EMBARK_STORE,
  ZASHIKI_EMBARK
} from '../../../actions/stages/embark-stage'

const {
  PENDING,
  COMPLETE
} = Signals
const STATE = {
  status: PENDING
}
const ACTION = {}

/**
 *  EmbarkStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function embarkReducer (state = STATE, { type, r: { data } = {} } = ACTION) {
  switch (type) {
    case ZASHIKI_EMBARK_FETCH:
      return { ...data }

    case ZASHIKI_EMBARK_STORE:
      return { ...data }

    case ZASHIKI_EMBARK:
      return {
        status: COMPLETE,
        ...data
      }

    default:
      return state
  }
}
