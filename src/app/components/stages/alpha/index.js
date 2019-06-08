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
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/alpha'

import { submit, change } from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

import AlphaStage from './component'

const {
  ALPHA
} = Signals

const mapStateToProps = ({ [ALPHA]: alpha = {} }) => ({ ...transform(alpha) })

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (resource, response) => {
    dispatch(submit(resource, response))
  },
  onChange: (resource) => {
    dispatch(change(resource))
  }
})

const mergeProps = (stateProps, { onSubmit, onChange }, ownProps) => ({
  ...stateProps,
  onSubmit,
  onChange,
  ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(AlphaStage))
