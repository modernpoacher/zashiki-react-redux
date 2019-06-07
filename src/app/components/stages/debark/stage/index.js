import React from 'react'
import PropTypes from 'prop-types'

import {
  Signals
} from 'shinkansen-signals'

import {
  Complete,
  Failure,
  Success,
  InProgress,
  NoDecision,
  Pending
} from './status'

const Debark = ({ debark: { status, definition, exception } }) => {
  switch (status) {
    case Signals.COMPLETE: return (
      <Complete
        {...definition} />
    )
    case Signals.FAILURE: return (
      <Failure
        {...definition} />
    )
    case Signals.SUCCESS: return (
      <Success
        {...definition} />
    )
    case Signals.IN_PROGRESS: return (
      <InProgress
        {...definition} />
    )
    case Signals.NO_DECISION: return (
      <NoDecision
        {...exception} />
    )
    default:
      return <Pending />
  }
}

Debark.propTypes = {
  debark: PropTypes.oneOfType([
    PropTypes.shape({
      status: PropTypes.number.isRequired,
      exception: PropTypes.object.isRequired
    }),
    PropTypes.shape({
      status: PropTypes.number.isRequired,
      definition: PropTypes.object.isRequired
    })
  ]).isRequired
}

Debark.defaultProps = {
  debark: {
    status: Signals.PENDING,
    definition: {}
  }
}

export default Debark
