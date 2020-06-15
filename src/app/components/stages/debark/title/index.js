import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Signals from 'shinkansen-engine/lib/components/signals'

import Component from './component'

const log = debug('zashiki-react-redux:app:components:stages:debark:title')

log('`debark` is awake')

const {
  DEBARK
} = Signals

function mapStateToProps ({ [DEBARK]: { status, description } = {} }) {
  log('mapStateToProps')

  return { status, description }
}

export default withRouter(connect(mapStateToProps)(Component))
