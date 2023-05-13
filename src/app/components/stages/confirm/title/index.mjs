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

const log = debug('zashiki-react-redux:app:components:stages:confirm:title')

log('`confirm` is awake')

const {
  CONFIRM
} = Signals

const mapStateToProps = ({ [CONFIRM]: { status, description } = {} }) => {
  log('mapStateToProps')

  return { status, description }
}

export default connect(mapStateToProps)(Component) // withRouter(connect(mapStateToProps)(Component))
*/

export { default } from './component.jsx'
