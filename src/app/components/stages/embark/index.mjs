import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#zashiki-react-redux/app/router/with-router'

import transform from '#zashiki-react-redux/app/transformers/stages/embark'

import {
  fetch,
  change,
  submit
} from '#zashiki-react-redux/app/actions/stages/embark'

import Component from '#zashiki-react-redux/app/components/stages/embark/component'

const log = debug('zashiki-react-redux/app/components/stages/embark')

log('`zashiki` is awake')

const {
  EMBARK
} = Signals

function mapStateToProps ({ [EMBARK]: embark = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return embark
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
    onEmbark () {
      /*
       *  log('onEmbark')
       */

      dispatch(fetch(router))
    },
    onChange (response) {
      /*
       *  log('onChange')
       */

      dispatch(change(response, router))
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
