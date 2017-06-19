import React from 'react'

import {
  Engine,
  Pinion
} from 'react-gears'

const transform = ({
  definition: schema,
  response: formData = {},
  gears = {}
}) => (
  (schema)
    ? ({
      definition: {
        schema,
        formData
      },
      gears
    })
    : ({ gears })
)

export default class OmegaStage extends React.Component {
  render () { // console.log('(OmegaStage)render()') // eslint-disable-line
    const {
      onSubmit,
      omega
    } = this.props

    const {
      definition,
      gears: {
        reverse,
        forward
      }
    } = transform(omega)

    return (
      <div className='omega-stage'>
        <Engine
          onSubmit={onSubmit}
          definition={definition} />
        <Pinion
          reverse={reverse}
          forward={forward}
          pattern='/:alpha/:omega' />
      </div>
    )
  }
}

OmegaStage.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  omega: React.PropTypes.object.isRequired
}

OmegaStage.defaultProps = {
  onSubmit: () => {} /* no op */
}
