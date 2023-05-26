import debug from 'debug'

import {
  connect
} from 'react-redux'

import Signals from 'shinkansen-engine/components/signals'

import withRouter from '#app/router/with-router'

import transform from '#app/transformers/stages/embark'

import {
  fetch,
  change,
  submit
} from '#app/actions/stages/embark'

import Component from './component.cjs'

const log = debug('zashiki-react-redux/app/components/stages/embark')

log('`zashiki` is awake')

const {
  EMBARK
} = Signals

function mapStateToProps ({ [EMBARK]: embark = {} }) {
  /*
   *  log('mapStateToProps')
   */

  return embark
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
    onEmbark () {
      /*
       *  log('onEmbark')
       */

      dispatch(fetch(history))
    },
    onChange (response) {
      /*
       *  log('onChange')
       */

      dispatch(change(response, history))
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
