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

export default class AlphaStage extends React.Component {
  render () { // console.log('(AlphaStage)render()') // eslint-disable-line
    const {
      alpha: {
        state: {
          index,
          count
        }
      }
    } = this.props

    if (count || index) {
      const {
        onSubmit,
        alpha: {
          omega,
          gears: {
            reverse,
            forward
          }
        }
      } = this.props

      return (
        <div className='alpha-stage'>
          <Count
            index={index}
            count={count} />
          <ol>
            {omega
              .map(({ resource, definition: schema, response: formData = {} }, key) => (
                <li key={key}>
                  <Motor
                    onSubmit={(response) => onSubmit(resource, response)}
                    definition={{ schema, formData }} />
                </li>
              ))}
          </ol>
          <Gears
            reverse={reverse}
            forward={forward}
            pattern={Signals.ALPHA_PATTERN} />
        </div>
      )
    }
    return false
  }
}

AlphaStage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  alpha: PropTypes.object.isRequired
}

AlphaStage.defaultProps = {
  onSubmit: () => {},
  alpha: {}
}
