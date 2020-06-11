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
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/omega'

import {
  mount,
  change,
  submit
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

import OmegaStage from './component'

const log = debug('zashiki-react-redux:app:components:stages:omega')

const {
  OMEGA
} = Signals

const mapStateToProps = ({ [OMEGA]: omega = {} }) => omega

const mapDispatchToProps = (dispatch) => ({ dispatch })

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  return {
    ...transform(stateProps),
    onMount (resource) {
      log('onMount')

      dispatch(mount(resource, history))
    },
    onChange (resource, response) {
      log('onChange')

      dispatch(change(resource, response, history))
    },
    onSubmit (resource, response) {
      log('onSubmit')

      dispatch(submit(resource, response, history))
    },
    history,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(OmegaStage))
