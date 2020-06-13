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
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/confirm'

import {
  fetch,
  change,
  submit
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/confirm'

import Component from './component'

const log = debug('zashiki-react-redux:app:components:stages:confirm')

log('`confirm` is awake')

const {
  CONFIRM
} = Signals

function mapStateToProps ({ [CONFIRM]: confirm = {} }) {
  log('mapStateToProps')

  return confirm
}

function mapDispatchToProps (dispatch) {
  log('mapDispatchToProps')

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  log('mergeProps')

  return {
    ...transform(stateProps),
    onConfirm () {
      log('onConfirm')

      dispatch(fetch(history))
    },
    onChange (response) {
      log('onChange')

      dispatch(change(response, history))
    },
    onSubmit (response) {
      log('onSubmit')

      dispatch(submit(response, history))
    },
    history,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
