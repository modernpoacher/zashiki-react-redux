import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#zashiki-react-redux/app/router/with-router'

import Component from '#zashiki-react-redux/app/components/stages/debark/title/component'

const log = debug('zashiki-react-redux/app/components/stages/debark/title')

log('`zashiki` is awake')

const {
  DEBARK
} = Signals

function mapStateToProps ({ [DEBARK]: { status, description } = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return { status, description }
}

export default withRouter(connect(mapStateToProps)(Component))
