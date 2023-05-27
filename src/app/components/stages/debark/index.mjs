import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '@modernpoacher/zashiki-react-redux/app/router/with-router'

import transform from '@modernpoacher/zashiki-react-redux/app/transformers/stages/debark'

import {
  fetch,
  submit
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

import Component from './component.cjs'

const log = debug('zashiki-react-redux/app/components/stages/debark')

log('`zashiki` is awake')

const {
  DEBARK
} = Signals

function mapStateToProps ({ [DEBARK]: debark = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return debark
}

function mapDispatchToProps (dispatch) {
  /*
   *  log('mapDispatchToProps')
   */

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  /*
   *  log('mergeProps')
   */

  return {
    ...transform(stateProps),
    onDebark () {
      /*
       *  log('onDebark')
       */

      dispatch(fetch(history))
    },
    onSubmit (response) {
      /*
       *  log('onSubmit')
       */

      dispatch(submit(response, history))
    },
    history,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
