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
      (index || count)
        ? (<h2>{index + 1} of {count}</h2>)
        : false
    )
  }

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
      },
      state: {
        index,
        count
      }
    } = transform(alpha)

    return (
      <div className='alpha-stage'>
        {this.createCount(index, count)}
        {omega
          .map(({ resource, definition: schema, response: formData = {} }, key) => (
            <Motor
              onSubmit={(response) => onSubmit(resource, response)}
              definition={{ schema, formData }}
              key={key} />
          ))}
        <Gears
          reverse={reverse}
          forward={forward}
          pattern={Signals.ALPHA_PATTERN} />
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
