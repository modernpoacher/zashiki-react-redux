import React from 'react'
import PropTypes from 'prop-types'
import {
  Boiler
} from 'react-boiler'
import {
  Engine
} from 'locomotive-engine'
import {
  Piston
} from 'locomotive-piston'

const transform = ({
  definition: schema,
  response: formData = {},
  gears = {},
  state = {}
}) => (
  (schema)
    ? ({
      definition: {
        schema,
        formData
      },
      gears,
      state
    })
    : ({ gears, state })
)

export default class OmegaStage extends React.Component {
  render () { // console.log('(OmegaStage)render()') // eslint-disable-line
    const {
      onSubmit,
      omega
    } = this.props

    const {
      definition = {},
      gears: {
        reverse,
        forward
      } = {},
      state: {
        index = 0,
        count = 1
      } = {}
    } = transform(omega)

    return (
      <div className='omega-stage'>
        <h3>{index + 1} of {count}</h3>
        <Engine
          onSubmit={onSubmit}
          definition={definition} />
        <Piston
          reverse={reverse}
          forward={forward}
          pattern={Boiler.OMEGA_PATTERN} />
      </div>
    )
  }
}

OmegaStage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  omega: PropTypes.object.isRequired
}

OmegaStage.defaultProps = {
  onSubmit: () => {} /* no op */
}
