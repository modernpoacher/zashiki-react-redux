import React from 'react'
import PropTypes from 'prop-types'

import {
  Signals
} from 'shinkansen-signals'

import Complete from './status/complete'
import Failure from './status/failure'
import Success from './status/success'
import InProgress from './status/in-progress'
import NoDecision from './status/no-decision'
import Pending from './status/pending'

const getErrorProps = ({ exception }) => ({ exception })
const getStageProps = ({ state, definition, gears, onSubmit }) => ({ state, definition, gears, onSubmit })

const OmegaStage = ({ status, ...omega }) => {
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

OmegaStage.propTypes = PropTypes.oneOfType([
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    definition: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    exception: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  })
]).isRequired

OmegaStage.defaultProps = {
  status: Signals.PENDING,
  definition: {},
  onSubmit: () => {}
}

export default OmegaStage
