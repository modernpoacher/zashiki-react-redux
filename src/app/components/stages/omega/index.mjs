/*
import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Signals from 'shinkansen-engine/components/signals'

import transform from '#app/transformers/stages/omega'

import {
  mount,
  change,
  submit
} from '#app/actions/stages/omega'

import Component from './component.jsx'

const log = debug('zashiki-react-redux:app:components:stages:omega')

log('`omega` is awake')

const {
  OMEGA
} = Signals

function mapStateToProps ({ [OMEGA]: omega = {} }) {
  log('mapStateToProps')

  return omega
}

function mapDispatchToProps (dispatch) {
  log('mapDispatchToProps')

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  log('mergeProps')

  return {
    ...transform(stateProps),
    onMount (resource) {
      log('onMount')

      dispatch(mount(resource, history))
    },
    onChange (resource, response) {
      log('onChange')

      dispatch(change(resource, response, history))
    },
    onSubmit (resource, response) {
      log('onSubmit')

      dispatch(submit(resource, response, history))
    },
    history,
    ...ownProps
  }
}

export default Component // connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component) // withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
*/

export { default } from './component.jsx'
