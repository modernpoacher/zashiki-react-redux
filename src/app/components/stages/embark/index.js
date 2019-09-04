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

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (response) => {
    console.log('onSubmit')

    dispatch(submit(response))
  },
  onEmbark: () => {
    console.log('onEmbark')

    dispatch(fetch())
  }
})

const mergeProps = (stateProps, { onSubmit, onEmbark }, ownProps) => ({
  ...stateProps,
  onSubmit,
  onEmbark,
  ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(EmbarkStage))
