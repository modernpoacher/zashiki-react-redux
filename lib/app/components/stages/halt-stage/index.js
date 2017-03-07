import React from 'react'

const FAILURE = 0 // eslint-disable-line
const SUCCESS = 1 // eslint-disable-line
const IN_PROGRESS = 3 // eslint-disable-line
const NO_DECISION = 4 // eslint-disable-line
const COMPLETE = 5 // eslint-disable-line

export default class DebarkStage extends React.Component {
  createFailure () {
    return <h2>Failure</h2>
  }

  createSuccess () {
    return <h2>Success</h2>
  }

  createInProgress () {
    return <h2>In Progress</h2>
  }

  createNoDecision () {
    return <h2>No Decision</h2>
  }

  createComplete () {
    return <h2>Complete</h2>
  }

  createPending () {
    return <h2>Pending</h2>
  }

  render () { // // console.log('(DebarkStage)render()') // eslint-disable-line
    const {
      debark: {
        status
      }
    } = this.props

    return (
      <div className='halt-stage'>
        {(() => {
          switch (status) {
            case FAILURE: return this.createFailure()
            case SUCCESS: return this.createSuccess()
            case IN_PROGRESS: return this.createInProgress()
            case NO_DECISION: return this.createNoDecision()
            case COMPLETE: return this.createComplete()
            default:
              return this.createPending()
          }
        })()}
      </div>
    )
  }
}

DebarkStage.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  debark: React.PropTypes.shape({
    status: React.PropTypes.number.isRequired,
    definition: React.PropTypes.object
  }).isRequired
}

DebarkStage.defaultProps = {
  onSubmit: () => { /* no op */ }
}
