import React from 'react'
import PropTypes from 'prop-types'

import {
  Signals
} from 'shinkansen-signals'

import {
  Gears
} from 'shinkansen-gears'

import Count from './count'
import Alpha from './stage'

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
          definitions,
          gears: {
            reverse,
            forward
          }
        }
      } = this.props

      return (
        <div className='alpha'>
          <Count
            index={index}
            count={count} />
          <Alpha
            onSubmit={onSubmit}
            definitions={definitions} />
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
  alpha: PropTypes.shape({
    definitions: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
  }).isRequired
}

AlphaStage.defaultProps = {
  onSubmit: () => {},
  alpha: {
    definitions: [],
    onSubmit: () => {}
  }
}
