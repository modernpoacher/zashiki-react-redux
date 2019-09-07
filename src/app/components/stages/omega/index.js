import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import {
  Signals
} from 'shinkansen-signals'

import {
  transform
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/omega'

import { submit, change } from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

import OmegaStage from './component'

const {
  OMEGA
} = Signals

const mapStateToProps = ({ [OMEGA]: omega = {} }) => ({ ...transform(omega) })

const mapDispatchToProps = (dispatch) => ({ dispatch })

const mergeProps = (stateProps, { dispatch }, { history, ...ownProps }) => ({
  ...stateProps,
  onSubmit: (resource, response) => {
    dispatch(submit(resource, response, history))
  },
  onChange: (resource) => {
    dispatch(change(resource, history))
  },
  history,
  ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(OmegaStage))
