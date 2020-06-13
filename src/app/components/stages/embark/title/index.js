import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Signals from 'shinkansen-engine/lib/components/signals'

import Component from './component'

const log = debug('zashiki-react-redux:app:components:stages:embark:title')

log('`embark` is awake')

const {
  EMBARK
} = Signals

function mapStateToProps ({ [EMBARK]: { status, description } = {} }) {
  log('mapStateToProps')

  return { status, description }
}

export default withRouter(connect(mapStateToProps)(Component))
