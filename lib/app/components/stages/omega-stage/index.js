import React from 'react'
import PropTypes from 'prop-types'
import {
  Boiler
} from 'shinkansen-boiler'
import {
  Motor
} from 'shinkansen-motor'
import {
  Gears
} from 'shinkansen-gears'
import {
  transform
} from '../../../transformers/stages/omega-stage'

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
      },
      state: {
        index,
        count
      }
    } = transform(omega)

    return (
      <div className='omega-stage'>
        <h3>{index + 1} of {count}</h3>
        <Motor
          onSubmit={onSubmit}
          definition={definition} />
        <Gears
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
