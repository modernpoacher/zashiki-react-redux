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

import Count from './count'

export default class OmegaStage extends React.Component {
  render () { // console.log('(OmegaStage)render()') // eslint-disable-line
    const {
      omega: {
        state: {
          index,
          count
        }
      }
    } = this.props

    if (index || count) {
      const {
        onSubmit,
        omega: {
          definition,
          gears: {
            reverse,
            forward
          }
        }
      } = this.props

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
