import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Signals from 'shinkansen-engine/lib/components/signals'

import Gears from 'shinkansen-engine/lib/components/gears'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/count'
import Alpha from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/alpha'

export default class AlphaStage extends Component {
  render () { // console.log('(AlphaStage)render()') // eslint-disable-line
    const {
      state: {
        index,
        count
      }
    } = this.props

    if (count || index) {
      const {
        onChange,
        onSubmit,
        definitions,
        gears: {
          reverse,
          forward
        }
      } = this.props

      return (
        <div className='alpha'>
          <Count
            index={index}
            count={count} />
          <Alpha
            onChange={onChange}
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
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.shape({
    index: PropTypes.number,
    count: PropTypes.number
  }),
  definitions: PropTypes.array.isRequired,
  gears: PropTypes.shape({
    forward: PropTypes.object,
    reverse: PropTypes.object
  })
}

AlphaStage.defaultProps = {
  state: {},
  gears: {}
}
