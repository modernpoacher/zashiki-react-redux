import React from 'react'
import PropTypes from 'prop-types'

import {
  Signals
} from 'shinkansen-signals'

import Zashiki from '@modernpoacher/zashiki-react-redux/app/components/zashiki/component'

import Complete from './status/complete'
import Failure from './status/failure'
import Success from './status/success'
import InProgress from './status/in-progress'
import NoDecision from './status/no-decision'
import Pending from './status/pending'

const getErrorProps = ({ exception }) => exception
const getStageProps = ({ state, definitions, gears, onSubmit }) => ({ state, definitions, gears, onSubmit })

export default class AlphaStage extends Zashiki {
  render () {
    const {
      status,
      ...alpha
    } = this.props

    switch (status) {
      case Signals.FAILURE: return (
        <Failure
          {...getErrorProps(alpha)} />
      )
      case Signals.SUCCESS: return (
        <Success
          {...getStageProps(alpha)} />
      )
      case Signals.IN_PROGRESS: return (
        <InProgress
          {...getStageProps(alpha)} />
      )
      case Signals.NO_DECISION: return (
        <NoDecision
          {...getStageProps(alpha)} />
      )
      case Signals.COMPLETE: return (
        <Complete
          {...getStageProps(alpha)} />
      )
      default: return (
        <Pending
          {...getStageProps(alpha)} />
      )
    }
  }
}

AlphaStage.propTypes = PropTypes.oneOfType([
  PropTypes.shape({
    ...Zashiki.propTypes,
    status: PropTypes.number.isRequired,
    definitions: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    ...Zashiki.propTypes,
    status: PropTypes.number.isRequired,
    exception: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  })
]).isRequired
