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
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/embark'

import {
  fetch,
  change,
  submit
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

import EmbarkStage from './component'

const {
  EMBARK
} = Signals

const mapStateToProps = ({ [EMBARK]: embark = {} }) => ({ ...fromDocumentToZashiki(embark), [EMBARK]: embark })

const mapDispatchToProps = (dispatch) => ({ dispatch })

const mergeProps = ({ [EMBARK]: { definition = {}, response }, ...stateProps }, { dispatch }, { history, ...ownProps }) => ({
  ...stateProps,
  onChange: (key, value) => {
    dispatch(change(fromZashikiToDocument({ definition, response: { [key]: value } }), history))
  },
  onSubmit: () => {
    dispatch(submit(response, history))
  },
  onEmbark: () => {
    dispatch(fetch(history))
  },
  history,
  ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(EmbarkStage))
