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
import {
  transform
} from '../../../transformers/stages/alpha-stage'

export default class AlphaStage extends React.Component {
  render () { // console.log('(AlphaStage)render()') // eslint-disable-line
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
        <Piston
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
