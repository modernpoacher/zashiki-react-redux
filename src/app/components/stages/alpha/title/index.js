import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Signals from 'shinkansen-engine/lib/components/signals'

import Component from './component'

const log = debug('zashiki-react-redux:app:components:stages:alpha:title')

log('`alpha` is awake')

const {
  ALPHA
} = Signals

function mapStateToProps ({ [ALPHA]: { status, description } = {} }) {
  log('mapStateToProps')

  return { status, description }
}

export default withRouter(connect(mapStateToProps)(Component))
