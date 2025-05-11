import debug from '#zashiki-react-redux/debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#zashiki-react-redux/app/router/with-router'

import Component from '#zashiki-react-redux/app/components/stages/embark/title/component'

const log = debug('zashiki-react-redux/app/components/stages/embark/title')

log('`zashiki` is awake')

const {
  EMBARK
} = Signals

function mapStateToProps ({ [EMBARK]: { status, description } = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return { status, description }
}

export default withRouter(connect(mapStateToProps)(Component))
