import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Signals from 'shinkansen-engine/lib/components/signals'

import {
  transform
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/embark'

import {
  fetch,
  change,
  submit
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

import Component from './component'

const log = debug('zashiki-react-redux:app:components:stages:embark')

log('`embark` is awake')

const {
  EMBARK
} = Signals

function mapStateToProps ({ [EMBARK]: embark = {} }) {
  log('mapStateToProps')

  return embark
}

function mapDispatchToProps (dispatch) {
  log('mapDispatchToProps')

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  log('mergeProps')

  return {
    ...transform(stateProps),
    onEmbark () {
      log('onEmbark')

      dispatch(fetch(history))
    },
    onChange (response) {
      log('onChange')

      dispatch(change(response, history))
    },
    onSubmit (response) {
      log('onSubmit')

      dispatch(submit(response, history))
    },
    history,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
