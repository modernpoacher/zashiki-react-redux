/*

import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Signals from 'shinkansen-engine/components/signals'

import transform from '#app/transformers/stages/confirm'

import {
  fetch,
  submit
} from '#app/actions/stages/confirm'

import Component from './component.jsx'

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
    onSubmit (response) {
      log('onSubmit')

      dispatch(submit(response, history))
    },
    history,
    ...ownProps
  }
}

export default Component // connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component) // withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
*/

export { default } from './component.jsx'
