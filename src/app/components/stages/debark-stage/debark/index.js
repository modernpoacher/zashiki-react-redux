import React from 'react'
import PropTypes from 'prop-types'
import {
  Signals
} from 'shinkansen-signals'

const Failure = () => (
  <h2>Failure</h2>
)

const Success = () => (
  <h2>Success</h2>
)

const InProgress = () => (
  <h2>In Progress</h2>
)

const NoDecision = () => (
  <h2>No Decision</h2>
)

const Complete = () => (
  <h2>Complete</h2>
)

const Pending = () => (
  <h2>Pending</h2>
)

export default function Status ({ status }) {
  switch (status) {
    case Signals.FAILURE: return <Failure />
    case Signals.SUCCESS: return <Success />
    case Signals.IN_PROGRESS: return <InProgress />
    case Signals.NO_DECISION: return <NoDecision />
    case Signals.COMPLETE: return <Complete />
    default:
      return <Pending />
  }
}

Status.propTypes = {
  status: PropTypes.number.isRequired
}

Status.defaultProps = {
  status: Signals.PENDING
}
