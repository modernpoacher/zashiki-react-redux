import debug from 'debug'

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

const log = debug('zashiki-react-redux:app:components:stages:embark')

const {
  EMBARK
} = Signals

const mapStateToProps = ({ [EMBARK]: embark = {} }) => embark

const mapDispatchToProps = (dispatch) => ({ dispatch })

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  return {
    ...fromDocumentToZashiki(stateProps),
    onEmbark () {
      log('onEmbark')

      dispatch(fetch(history))
    },
    onChange (key, value) {
      log('onChange')

      const {
        definition
      } = stateProps

      dispatch(change(fromZashikiToDocument({ definition, response: { [key]: value } }), history))
    },
    onSubmit () {
      log('onSubmit')

      const {
        response
      } = stateProps

      dispatch(submit(response, history))
    },
    history,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(EmbarkStage))
