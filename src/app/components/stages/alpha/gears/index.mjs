import debug from '#zashiki-react-redux/debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#zashiki-react-redux/app/router/with-router'

import Component from '#zashiki-react-redux/app/components/stages/alpha/gears/component'

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
