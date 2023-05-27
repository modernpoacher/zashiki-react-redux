import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '@modernpoacher/zashiki-react-redux/app/router/with-router'

import transform from '@modernpoacher/zashiki-react-redux/app/transformers/stages/alpha'

import {
  mount,
  change,
  submit
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

import Component from './component.cjs'

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

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  /*
   *  log('mergeProps')
   */

  return {
    ...transform(stateProps),
    onMount (resource) {
      /*
   *  log('onMount')
   */

      dispatch(mount(resource, history))
    },
    onChange (resource, response) {
      /*
   *  log('onChange')
   */

      dispatch(change(resource, response, history))
    },
    onSubmit (resource, response) {
      /*
   *  log('onSubmit')
   */

      dispatch(submit(resource, response, history))
    },
    history,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
