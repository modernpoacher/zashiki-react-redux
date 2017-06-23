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
} from '../../../transformers/stages/alpha-stage'

export default class AlphaStage extends React.Component {
  createCount (index, count) {
    return (
      <h2>{index + 1} of {count}</h2>
    )
  }

  render () { // console.log('(AlphaStage)render()') // eslint-disable-line
    const {
      alpha
    } = this.props

    const ALPHA = transform(alpha)

    const {
      state: {
        index,
        count
      }
    } = ALPHA

    if (count || index) {
      const {
        onSubmit
      } = this.props

      const {
        omega,
        gears: {
          reverse,
          forward
        }
      } = ALPHA

      return (
        <div className='alpha-stage'>
          {this.createCount(index, count)}
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
  onSubmit: () => {} /* no op */
}
