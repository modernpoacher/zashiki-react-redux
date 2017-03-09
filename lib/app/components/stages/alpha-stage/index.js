import React from 'react'

import {
  Engine,
  Pinion
} from 'react-gears/lib'

const transform = ({
  omega = [],
  definition: schema,
  response: formData = {},
  gears = {}
}) => (
  (schema)
    ? ({
      omega,
      definition: {
        schema,
        formData
      },
      gears
    })
    : ({ omega, gears })
)

export default class AlphaStage extends React.Component {
  render () { // // console.log('(AlphaStage)render()') // eslint-disable-line
    const {
      onSubmit,
      alpha
    } = this.props

    const {
      omega,
      gears: {
        reverse,
        forward
      }
    } = transform(alpha)

    return (
      <div className='alpha-stage'>
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
          pattern='/:alpha' />
      </div>
    )
  }
}

AlphaStage.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  alpha: React.PropTypes.object.isRequired
}

AlphaStage.defaultProps = {
  onSubmit: () => { /* no op */ }
}
