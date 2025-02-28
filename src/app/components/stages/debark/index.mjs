import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#zashiki-react-redux/app/router/with-router'

import transform from '#zashiki-react-redux/app/transformers/stages/debark'

import {
  fetch,
  submit
} from '#zashiki-react-redux/app/actions/stages/debark'

import Component from '#zashiki-react-redux/app/components/stages/debark/component'

const log = debug('zashiki-react-redux/app/components/stages/debark')

log('`zashiki` is awake')

const {
  DEBARK
} = Signals

function mapStateToProps ({ [DEBARK]: debark = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return debark
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
    onDebark () {
      /*
       *  log('onDebark')
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
