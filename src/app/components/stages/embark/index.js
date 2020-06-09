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

const mapStateToProps = ({ [EMBARK]: stateProps = {} }) => stateProps

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
    onEmbark () {
      dispatch(fetch(history))
    },
    history,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(EmbarkStage))
