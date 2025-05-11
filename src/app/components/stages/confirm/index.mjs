import debug from '#zashiki-react-redux/debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#zashiki-react-redux/app/router/with-router'

import transform from '#zashiki-react-redux/app/transformers/stages/confirm'

import {
  fetch,
  submit
} from '#zashiki-react-redux/app/actions/stages/confirm'

import Component from '#zashiki-react-redux/app/components/stages/confirm/component'

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

function mergeProps (stateProps, { dispatch }, { router, ...ownProps }) {
  /*
   *  log('mergeProps')
   */

  return {
    ...transform(stateProps),
    onConfirm () {
      /*
       *  log('onConfirm')
       */

      dispatch(fetch(router))
    },
    onSubmit (response) {
      /*
       *  log('onSubmit')
       */

      dispatch(submit(response, router))
    },
    router,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
