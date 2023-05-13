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

const log = debug('zashiki-react-redux:app:components:stages:alpha:title')

log('`alpha` is awake')

const {
  ALPHA
} = Signals

function mapStateToProps ({ [ALPHA]: { status, description } = {} }) {
  log('mapStateToProps')

  return { status, description }
}

export default Component // connect(mapStateToProps)(Component) // withRouter(connect(mapStateToProps)(Component))
*/

export { default } from './component'