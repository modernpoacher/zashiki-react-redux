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
const getStageProps = ({ state, resource, definition, gears, onSubmit }) => ({ state, resource, definition, gears, onSubmit })

export default class OmegaStage extends Zashiki {
  render () {
    const {
      status,
      ...omega
    } = this.props

    switch (status) {
      case Signals.FAILURE: return (
        <Failure
          {...getErrorProps(omega)} />
      )
      case Signals.SUCCESS: return (
        <Success
          {...getStageProps(omega)} />
      )
      case Signals.IN_PROGRESS: return (
        <InProgress
          {...getStageProps(omega)} />
      )
      case Signals.NO_DECISION: return (
        <NoDecision
          {...getStageProps(omega)} />
      )
      case Signals.COMPLETE: return (
        <Complete
          {...getStageProps(omega)} />
      )
      default: return (
        <Pending
          {...getStageProps(omega)} />
      )
    }
  }
}

OmegaStage.propTypes = PropTypes.oneOfType([
  PropTypes.shape({
    ...Zashiki.propTypes,
    status: PropTypes.number.isRequired,
    definition: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    ...Zashiki.propTypes,
    status: PropTypes.number.isRequired,
    exception: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  })
]).isRequired
