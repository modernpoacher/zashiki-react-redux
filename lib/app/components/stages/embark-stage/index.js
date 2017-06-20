import React from 'react'
import PropTypes from 'prop-types'
import {
  Boiler
} from 'react-boiler'
import {
  Engine
} from 'react-gears'

const {
  COMPLETE
} = Boiler

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

  create (status) {
    switch (status) {
      case COMPLETE: return this.createComplete()
      default:
        return this.createPending()
    }
  }

  render () { // console.log('(EmbarkStage)render()') // eslint-disable-line
    const {
      embark: {
        status
      }
    } = this.props

    return (
      <div className='embark-stage'>
        {this.create(status)}
      </div>
    )
  }
}

EmbarkStage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  embark: PropTypes.object.isRequired
}

EmbarkStage.defaultProps = {
  onSubmit: () => {} /* no op */
}
