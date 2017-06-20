import React from 'react'
import PropTypes from 'prop-types'
import {
  Boiler
} from 'react-boiler'
import {
  Engine,
  Pinion
} from 'react-gears'

const transform = ({
  omega = [],
  definition: schema,
  response: formData = {},
  gears = {},
  state = {}
}) => (
  (schema)
    ? ({
      omega,
      definition: {
        schema,
        formData
      },
      gears,
      state
    })
    : ({ omega, gears, state })
)

export default class AlphaStage extends React.Component {
  render () { // console.log('(AlphaStage)render()') // eslint-disable-line
    const {
      onSubmit,
      alpha
    } = this.props

    const {
      omega = [],
      gears: {
        reverse,
        forward
      } = {} /* ,
      state: {
        index = 0,
        count = 1
      } */
    } = transform(alpha)

    return (
      <div className='alpha-stage'>
        { /* <h3>{index + 1} of {count}</h3> */ }
        {omega
          .map(({ resource, definition: schema, response: formData = {} }, key) => (
            <Engine
              onSubmit={(response) => onSubmit(resource, response)}
              definition={{ schema, formData }}
              key={key} />
          ))}
        <Pinion
          reverse={reverse}
          forward={forward}
          pattern={Boiler.ALPHA_PATTERN} />
      </div>
    )
  }
}

AlphaStage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  alpha: PropTypes.object.isRequired
}

AlphaStage.defaultProps = {
  onSubmit: () => {} /* no op */
}
