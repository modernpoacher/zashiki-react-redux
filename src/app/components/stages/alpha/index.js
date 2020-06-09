import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Signals from 'shinkansen-engine/lib/components/signals'

import {
  transform
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/alpha'

import { submit, change } from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

import AlphaStage from './component'

const {
  ALPHA
} = Signals

const mapStateToProps = ({ [ALPHA]: alpha = {} }) => ({ ...transform(alpha) })

const mapDispatchToProps = (dispatch) => ({ dispatch })

const mergeProps = (stateProps, { dispatch }, { history, ...ownProps }) => ({
  ...stateProps,
  onChange: (resource) => {
    dispatch(change(resource, history))
  },
  onSubmit: (resource, response) => {
    dispatch(submit(resource, response, history))
  },
  history,
  ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(AlphaStage))
