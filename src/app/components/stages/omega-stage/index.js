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
} from 'zashiki-react-redux/app/transformers/stages/omega-stage'

import Count from './count'

export default class OmegaStage extends React.Component {
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
          <Count
            index={index}
            count={count} />
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
