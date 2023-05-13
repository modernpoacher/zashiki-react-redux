/*
import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import {
  mount,
  submit,
  change
} from '#app/actions/zashiki'

import Component from './component.jsx'

const log = debug('zashiki-react-redux:app:components:zashiki')

log('`zashiki` is awake')

function mapStateToProps ({ zashiki = {} } = {}) {
  log('mapStateToProps')

  return { zashiki }
}

function mapDispatchToProps (dispatch) {
  log('mapDispatchToProps')

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  log('mergeProps')

  return {
    ...stateProps,
    onMount: (resource) => {
      dispatch(mount(resource, history))
    },
    onSubmit: (resource, response) => {
      dispatch(submit(resource, response, history))
    },
    onChange: (resource) => {
      dispatch(change(resource, history))
    },
    history,
    ...ownProps
  }
}

export default Component // connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component) // withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
*/

export { default } from './component.jsx'
