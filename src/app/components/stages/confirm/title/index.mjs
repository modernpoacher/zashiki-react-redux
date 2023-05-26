import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#app/router/with-router'

import Component from './component.cjs'

const log = debug('zashiki-react-redux/app/components/stages/confirm/title')

log('`zashiki` is awake')

const {
  CONFIRM
} = Signals

const mapStateToProps = ({ [CONFIRM]: { status, description } = {} }) => {
  /*
   *  log('mapStateToProps')
   */

  return { status, description }
}

export default withRouter(connect(mapStateToProps)(Component))
