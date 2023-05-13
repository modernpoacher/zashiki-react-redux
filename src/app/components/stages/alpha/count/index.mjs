import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#app/router/with-router'

import Component from './component.jsx'

const log = debug('zashiki-react-redux:app:components:stages:alpha:state')

log('`alpha` is awake')

const {
  ALPHA
} = Signals

function mapStateToProps ({ [ALPHA]: { state = {} } = {} }) {
  log('mapStateToProps')

  return state
}

export default withRouter(connect(mapStateToProps)(Component))
