import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Signals from 'shinkansen-engine/lib/components/signals'

import {
  fromDocumentToZashiki,
  fromZashikiToDocument
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/debark'

import {
  fetch,
  change,
  submit
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

import DebarkStage from './component'

const {
  DEBARK
} = Signals

const mapStateToProps = ({ [DEBARK]: stateProps = {} }) => stateProps

const mapDispatchToProps = (dispatch) => ({ dispatch })

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  return {
    ...fromDocumentToZashiki(stateProps),
    onChange (key, value) {
      const {
        definition
      } = stateProps

      dispatch(change(fromZashikiToDocument({ definition, response: { [key]: value } }), history))
    },
    onSubmit () {
      const {
        response
      } = stateProps

      dispatch(submit(response, history))
    },
    onDebark () {
      dispatch(fetch(history))
    },
    history,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(DebarkStage))
