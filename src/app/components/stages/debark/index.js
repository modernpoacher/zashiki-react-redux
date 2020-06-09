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

const mapStateToProps = ({ [DEBARK]: debark = {} }) => ({ ...fromDocumentToZashiki(debark), [DEBARK]: debark })

const mapDispatchToProps = (dispatch) => ({ dispatch })

const mergeProps = ({ [DEBARK]: { definition, response }, ...stateProps }, { dispatch }, { history, ...ownProps }) => ({
  ...stateProps,
  onChange: (key, value) => {
    dispatch(change(fromZashikiToDocument({ definition, response: { [key]: value } }), history))
  },
  onSubmit: () => {
    dispatch(submit(response, history))
  },
  onDebark: () => {
    dispatch(fetch(history))
  },
  history,
  ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(DebarkStage))
