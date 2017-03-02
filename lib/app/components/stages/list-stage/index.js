import React from 'react'

import {
  Engine
} from 'react-gears/lib'

const FAILURE = 0 // eslint-disable-line
const SUCCESS = 1 // eslint-disable-line
const IN_PROGRESS = 3 // eslint-disable-line
const NO_DECISION = 4 // eslint-disable-line
const COMPLETE = 5 // eslint-disable-line

export default class ListStage extends React.Component {
  createComplete () {
    const {
      onSubmit,
      listStage: {
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

  render () { // // console.log('(ListStage)render()') // eslint-disable-line
    const {
      listStage: {
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

ListStage.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  listStage: React.PropTypes.shape({
    status: React.PropTypes.number.isRequired,
    definition: React.PropTypes.object
  }).isRequired
}

ListStage.defaultProps = {
  onSubmit: () => { /* no op */ }
}
