import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#app/router/with-router'

import Component from './component.jsx'

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
