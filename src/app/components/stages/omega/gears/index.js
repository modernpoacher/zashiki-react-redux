import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Signals from 'shinkansen-engine/lib/components/signals'

import Component from './component'

const log = debug('zashiki-react-redux:app:components:stages:omega:gears')

log('`omega` is awake')

const {
  OMEGA
} = Signals

function mapStateToProps ({ [OMEGA]: { gears } = {} }) {
  log('mapStateToProps')

  return gears
}

export default withRouter(connect(mapStateToProps)(Component))
