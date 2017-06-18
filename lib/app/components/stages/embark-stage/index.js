import React from 'react'

import {
  Engine
} from 'react-gears'

const FAILURE = 0 // eslint-disable-line
const SUCCESS = 1 // eslint-disable-line
const IN_PROGRESS = 3 // eslint-disable-line
const NO_DECISION = 4 // eslint-disable-line
const COMPLETE = 5 // eslint-disable-line

const transform = ({
  definition: schema,
  response: formData
}) => (
  (schema)
    ? ({
      definition: {
        schema,
        formData
      }
    })
    : ({})
)

export default class EmbarkStage extends React.Component {
  createComplete () { // console.log('createComplete()')
    const {
      onSubmit,
      embark
    } = this.props

    const {
      definition
    } = transform(embark)

    return (
      <div className='embark-stage'>
        <Engine
          onSubmit={onSubmit}
          definition={definition} />
      </div>
    )
  }

  createPending () { // console.log('createPending()')
    return (
      <h2>Pending</h2>
    )
  }

  render () { // // console.log('(EmbarkStage)render()') // eslint-disable-line
    const {
      embark: {
        status
      }
    } = this.props

    return (
      <div className='embark-stage'>
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
  embark: React.PropTypes.object.isRequired
}

EmbarkStage.defaultProps = {
  onSubmit: () => {} /* no op */
}
