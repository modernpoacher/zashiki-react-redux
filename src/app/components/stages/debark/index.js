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
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/debark'

import { fetch, submit } from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

import DebarkStage from './component'

const {
  DEBARK
} = Signals

const mapStateToProps = ({ [DEBARK]: debark = {} }) => ({ ...transform(debark) })

const mapDispatchToProps = (dispatch) => ({ dispatch })

const mergeProps = (stateProps, { dispatch }, { history, ...ownProps }) => ({
  ...stateProps,
  onSubmit: (response) => {
    dispatch(submit(response, history))
  },
  onDebark: () => {
    dispatch(fetch(history))
  },
  history,
  ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(DebarkStage))
