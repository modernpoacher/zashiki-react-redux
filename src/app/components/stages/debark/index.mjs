/*
import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Signals from 'shinkansen-engine/components/signals'

import transform from '#app/transformers/stages/debark'

import {
  fetch,
  submit
} from '#app/actions/stages/debark'

import Component from './component.jsx'

const log = debug('zashiki-react-redux:app:components:stages:debark')

log('`debark` is awake')

const {
  DEBARK
} = Signals

function mapStateToProps ({ [DEBARK]: debark = {} }) {
  log('mapStateToProps')

  return debark
}

function mapDispatchToProps (dispatch) {
  log('mapDispatchToProps')

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  log('mergeProps')

  return {
    ...transform(stateProps),
    onDebark () {
      log('onDebark')

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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component) // withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
*/

export { default } from './component.jsx'
