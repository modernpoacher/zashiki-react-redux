import React from 'react'

import {
  Engine
} from 'react-gears/lib'

const FAILURE = 0 // eslint-disable-line
const SUCCESS = 1 // eslint-disable-line
const IN_PROGRESS = 3 // eslint-disable-line
const NO_DECISION = 4 // eslint-disable-line
const COMPLETE = 5 // eslint-disable-line

export default class EmbarkStage extends React.Component {
  createComplete () {
    const {
      onSubmit,
      embark: {
        definition
      }
    } = this.props

    return (
      <Engine
        onSubmit={onSubmit}
        definition={definition} />
    )
  }

  createPending () {
    return <h2>Pending</h2>
  }

  render () { // // console.log('(EmbarkStage)render()') // eslint-disable-line
    const {
      embark: {
        status
      }
    } = this.props

    return (
      <div className='list-stage'>
        {(() => {
          switch (status) {
            case COMPLETE: return this.createComplete()
            default:
              return this.createPending()
          }
        })()}
      </div>
    )
  }
}

EmbarkStage.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  embark: React.PropTypes.shape({
    status: React.PropTypes.number.isRequired,
    definition: React.PropTypes.object
  }).isRequired
}

EmbarkStage.defaultProps = {
  onSubmit: () => { /* no op */ }
}
