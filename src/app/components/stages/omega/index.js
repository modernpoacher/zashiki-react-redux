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

import { submit, change } from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

import OmegaStage from './component'

const {
  OMEGA
} = Signals

const mapStateToProps = ({ [OMEGA]: omega = {} }) => omega

const mapDispatchToProps = (dispatch) => ({ dispatch })

function mergeProps (stateProps, { dispatch }, { history, ...ownProps }) {
  return {
    ...transform(stateProps),
    onChange (resource) {
      dispatch(change(resource, history))
    },
    onSubmit (resource, response) {
      dispatch(submit(resource, response, history))
    },
    history,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(OmegaStage))
