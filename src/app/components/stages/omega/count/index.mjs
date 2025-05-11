import debug from '#zashiki-react-redux/debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#zashiki-react-redux/app/router/with-router'

import Component from '#zashiki-react-redux/app/components/stages/omega/count/component'

const log = debug('zashiki-react-redux/app/components/stages/omega/count')

log('`zashiki` is awake')

const {
  OMEGA
} = Signals

function mapStateToProps ({ [OMEGA]: { state = {} } = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return state
}

export default withRouter(connect(mapStateToProps)(Component))
