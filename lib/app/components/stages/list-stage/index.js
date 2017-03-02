import React from 'react'

import {
  Engine
} from 'react-gears/lib'

const COMPLETE = 6

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

  render () { console.log('(ListStage)render()') // eslint-disable-line
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
    definition: React.PropTypes.object
  }).isRequired
}

ListStage.defaultProps = {
  onSubmit: () => { /* no op */ }
}
