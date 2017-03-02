import React from 'react'

const FAILURE = 0
const SUCCESS = 1
const INCOMPLETE = 3
const NODECISION = 4

export default class HaltStage extends React.Component {
  createFailure () {
    return <h2>Failure</h2>
  }

  createSuccess () {
    return <h2>Success</h2>
  }

  createIncomplete () {
    return <h2>Incomplete</h2>
  }

  createNoDecision () {
    return <h2>NoDecision</h2>
  }

  createPending () {
    return <h2>Pending</h2>
  }

  render () { console.log('(HaltStage)render()') // eslint-disable-line
    const {
      haltStage: {
        status
      }
    } = this.props

    return (
      <div className='halt-stage'>
        {(() => {
          switch (status) {
            case FAILURE: return this.createFailure()
            case SUCCESS: return this.createSuccess()
            case INCOMPLETE: return this.createIncomplete()
            case NODECISION: return this.createNoDecision()
            default:
              return this.createPending()
          }
        })()}
      </div>
    )
  }
}

HaltStage.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  haltStage: React.PropTypes.shape({
    status: React.PropTypes.number.isRequired
  }).isRequired
}

HaltStage.defaultProps = {
  onSubmit: () => { /* no op */ }
}
