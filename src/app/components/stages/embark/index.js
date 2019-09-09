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
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/embark'

import { fetch, submit } from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

import EmbarkStage from './component'

const {
  EMBARK
} = Signals

const mapStateToProps = ({ [EMBARK]: embark = {} }) => ({ ...transform(embark) })

const mapDispatchToProps = (dispatch) => ({ dispatch })

const mergeProps = (stateProps, { dispatch }, { history, ...ownProps }) => ({
  ...stateProps,
  onSubmit: (response) => {
    dispatch(submit(response, history))
  },
  onEmbark: () => {
    dispatch(fetch(history))
  },
  history,
  ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(EmbarkStage))
