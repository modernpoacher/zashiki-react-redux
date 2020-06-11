import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Signals from 'shinkansen-engine/lib/components/signals'

import {
  transform
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/debark'

import {
  fetch,
  change,
  submit
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

import DebarkStage from './component'

const log = debug('zashiki-react-redux:app:components:stages:debark')

const {
  DEBARK
} = Signals

const mapStateToProps = ({ [DEBARK]: debark = {} }) => debark

const mapDispatchToProps = (dispatch) => ({ dispatch })

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  return {
    ...transform(stateProps),
    onDebark () {
      log('onDebark')

      dispatch(fetch(history))
    },
    onChange (response) {
      log('onChange')

      dispatch(change(response, history))
    },
    onSubmit (response) {
      log('onSubmit', response)

      dispatch(submit(response, history))
    },
    history,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(DebarkStage))
