import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#app/router/with-router'

import Component from './component.cjs'

const log = debug('zashiki-react-redux/app/components/stages/alpha/gears')

log('`zashiki` is awake')

const {
  ALPHA
} = Signals

function mapStateToProps ({ [ALPHA]: { gears = {} } = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return gears
}

export default withRouter(connect(mapStateToProps)(Component))
