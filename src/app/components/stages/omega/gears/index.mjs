import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '@modernpoacher/zashiki-react-redux/app/router/with-router'

import Component from './component.cjs'

const log = debug('zashiki-react-redux/app/components/stages/omega/gears')

log('`zashiki` is awake')

const {
  OMEGA
} = Signals

function mapStateToProps ({ [OMEGA]: { gears } = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return gears
}

export default withRouter(connect(mapStateToProps)(Component))
