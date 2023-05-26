import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#app/router/with-router'

import transform from '#app/transformers/stages/confirm'

import {
  fetch,
  submit
} from '#app/actions/stages/confirm'

import Component from './component.cjs'

const log = debug('zashiki-react-redux/app/components/stages/confirm')

log('`zashiki` is awake')

const {
  CONFIRM
} = Signals

function mapStateToProps ({ [CONFIRM]: confirm = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return confirm
}

function mapDispatchToProps (dispatch) {
  /*
   *  log('mapDispatchToProps')
   */

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  /*
   *  log('mergeProps')
   */

  return {
    ...transform(stateProps),
    onConfirm () {
      /*
       *  log('onConfirm')
       */

      dispatch(fetch(history))
    },
    onSubmit (response) {
      /*
       *  log('onSubmit')
       */

      dispatch(submit(response, history))
    },
    history,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
