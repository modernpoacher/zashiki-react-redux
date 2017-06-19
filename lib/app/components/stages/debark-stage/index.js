import React from 'react'
import {
  Steam
} from 'react-steam'

const {
  FAILURE,
  SUCCESS,
  IN_PROGRESS,
  NO_DECISION,
  COMPLETE
} = Steam

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
      case FAILURE: return this.createFailure()
      case SUCCESS: return this.createSuccess()
      case IN_PROGRESS: return this.createInProgress()
      case NO_DECISION: return this.createNoDecision()
      case COMPLETE: return this.createComplete()
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
  onSubmit: React.PropTypes.func.isRequired,
  debark: React.PropTypes.object.isRequired
}

DebarkStage.defaultProps = {
  onSubmit: () => {} /* no op */
}
