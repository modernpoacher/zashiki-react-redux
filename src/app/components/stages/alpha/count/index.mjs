/*
import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Signals from 'shinkansen-engine/components/signals'

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

export default connect(mapStateToProps)(Component) // withRouter(connect(mapStateToProps)(Component))
*/

export { default } from './component'
