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

const Embark = ({ embark: { status, definition, exception }, onSubmit }) => {
  switch (status) {
    case Signals.COMPLETE: return (
      <Complete
        definition={definition} onSubmit={onSubmit} />
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
        {...definition} />
    )
    case Signals.FAILURE: return (
      <Failure
        {...exception} />
    )
    default:
      return <Pending />
  }
}

Embark.propTypes = {
  embark: PropTypes.oneOfType([
    PropTypes.shape({
      status: PropTypes.number.isRequired,
      definition: PropTypes.object.isRequired
    }),
    PropTypes.shape({
      status: PropTypes.number.isRequired,
      exception: PropTypes.object.isRequired
    })
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired
}

Embark.defaultProps = {
  embark: {
    status: Signals.PENDING,
    definition: {}
  },
  onSubmit: () => {}
}

export default Embark
