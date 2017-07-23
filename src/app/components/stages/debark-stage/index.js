import React from 'react'
import PropTypes from 'prop-types'
import {
  Signals
} from 'shinkansen-signals'

export default class DebarkStage extends React.Component {
  createFailure () {
    return (
      <h2>Failure</h2>
    )
  }

  createSuccess () {
    return (
      <h2>Success</h2>
    )
  }

  createInProgress () {
    return (
      <h2>In Progress</h2>
    )
  }

  createNoDecision () {
    return (
      <h2>No Decision</h2>
    )
  }

  createComplete () {
    return (
      <h2>Complete</h2>
    )
  }

  createPending () {
    return (
      <h2>Pending</h2>
    )
  }

  create (status) {
    switch (status) {
      case Signals.FAILURE: return this.createFailure()
      case Signals.SUCCESS: return this.createSuccess()
      case Signals.IN_PROGRESS: return this.createInProgress()
      case Signals.NO_DECISION: return this.createNoDecision()
      case Signals.COMPLETE: return this.createComplete()
      default:
        return this.createPending()
    }
  }

  render () { // console.log('(DebarkStage)render()') // eslint-disable-line
    const {
      debark: {
        status
      }
    } = this.props

    return (
      <div className='debark-stage'>
        {this.create(status)}
      </div>
    )
  }
}

DebarkStage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  debark: PropTypes.object.isRequired
}

DebarkStage.defaultProps = {
  onSubmit: () => {},
  debark: {}
}
