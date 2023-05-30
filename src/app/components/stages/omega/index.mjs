import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '@modernpoacher/zashiki-react-redux/app/router/with-router'

import transform from '@modernpoacher/zashiki-react-redux/app/transformers/stages/omega'

import {
  mount,
  change,
  submit
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

import Component from './component.cjs'

const log = debug('zashiki-react-redux/app/components/stages/omega')

log('`zashiki` is awake')

const {
  OMEGA
} = Signals

function mapStateToProps ({ [OMEGA]: omega = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return omega
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
