import React from 'react'
import PropTypes from 'prop-types'
import {
  Signals
} from 'shinkansen-signals'
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
  createCount (index, count) {
    return (
      <h2>{index + 1} of {count}</h2>
    )
  }

  render () { // console.log('(OmegaStage)render()') // eslint-disable-line
    const {
      omega
    } = this.props

    const OMEGA = transform(omega)

    const {
      state: {
        index,
        count
      }
    } = OMEGA

    if (index || count) {
      const {
        onSubmit
      } = this.props

      const {
        definition,
        gears: {
          reverse,
          forward
        }
      } = OMEGA

      return (
        <div className='omega-stage'>
          {this.createCount(index, count)}
          <Motor
            onSubmit={onSubmit}
            definition={definition} />
          <Gears
            reverse={reverse}
            forward={forward}
            pattern={Signals.OMEGA_PATTERN} />
        </div>
      )
    }
    return false
  }
}

OmegaStage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  omega: PropTypes.object.isRequired
}

OmegaStage.defaultProps = {
  onSubmit: () => {},
  omega: {}
}
