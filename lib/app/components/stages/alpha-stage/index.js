import React from 'react'

import {
  Engine,
  Pinion
} from 'react-gears/lib'

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

export default class AlphaStage extends React.Component {
  render () { // // console.log('(AlphaStage)render()') // eslint-disable-line
    const {
      onSubmit,
      alpha
    } = this.props

    const {
      definition,
      gears: {
        reverse,
        forward
      }
    } = transform(alpha)

    return (
      <div className='alpha-stage'>
        <Engine
          onSubmit={onSubmit}
          definition={definition} />
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
