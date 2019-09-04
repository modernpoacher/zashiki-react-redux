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

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (response) => {
    console.log('onSubmit') // , submit(response))

    dispatch(submit(response))
  },
  onDebark: () => {
    console.log('onDebark') // , fetch())

    dispatch(fetch())
  }
})

const mergeProps = (stateProps, { onSubmit, onDebark }, ownProps) => ({
  ...stateProps,
  onSubmit,
  onDebark,
  ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(DebarkStage))
