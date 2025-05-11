import debug from '#zashiki-react-redux/debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#zashiki-react-redux/app/router/with-router'

import Component from '#zashiki-react-redux/app/components/stages/omega/title/component'

const log = debug('zashiki-react-redux/app/components/stages/omega/title')

log('`zashiki` is awake')

const {
  OMEGA
} = Signals

function mapStateToProps ({ [OMEGA]: { status, description } = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return { status, description }
}

export default withRouter(connect(mapStateToProps)(Component))
