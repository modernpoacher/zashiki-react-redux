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

const FETCH = `${ZASHIKI_EMBARK_FETCH}_FULFILLED`
const STORE = `${ZASHIKI_EMBARK_STORE}_FULFILLED`
const EMBARK = `${ZASHIKI_EMBARK}_FULFILLED`

/**
 *  EmbarkStage Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function embarkReducer (state = STATE, { type, payload: { data } = {} } = ACTION) {
  switch (type) {
    case FETCH:
      return { ...data }

    case STORE:
      return { ...data }

    case EMBARK:
      return {
        status: COMPLETE,
        ...data
      }

    default:
      return state
  }
}
