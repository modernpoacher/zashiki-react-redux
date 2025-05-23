import debug from '#zashiki-react-redux/debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#zashiki-react-redux/app/router/with-router'

import transform from '#zashiki-react-redux/app/transformers/stages/alpha'

import {
  mount,
  change,
  submit
} from '#zashiki-react-redux/app/actions/stages/alpha'

import Component from '#zashiki-react-redux/app/components/stages/alpha/component'

const log = debug('zashiki-react-redux/app/components/stages/alpha')

log('`zashiki` is awake')

const {
  ALPHA
} = Signals

function mapStateToProps ({ [ALPHA]: alpha = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return alpha
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
    onMount (resource) {
      /*
       *  log('onMount')
       */

      dispatch(mount(resource, router))
    },
    onChange (resource, response) {
      /*
       *  log('onChange')
       */

      dispatch(change(resource, response, router))
    },
    onSubmit (resource, response) {
      /*
       *  log('onSubmit')
       */

      dispatch(submit(resource, response, router))
    },
    router,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
