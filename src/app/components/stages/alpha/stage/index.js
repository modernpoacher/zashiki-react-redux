import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

import Gears from 'shinkansen-engine/lib/components/gears'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/count'
import Alpha from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/alpha'

const log = debug('zashiki-react-redux:app:components:stages:alpha:stage')

log('`AlphaStage` is awake')

export default class AlphaStage extends Component {
  render () {
    log('render')

    const {
      state: {
        index,
        count
      }
    } = this.props

    if (count || index) {
      const {
        definitions,
        response,
        onChange,
        onSubmit,
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
            definitions={definitions}
            response={response}
            onChange={onChange}
            onSubmit={onSubmit} />
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
  state: PropTypes.shape({
    index: PropTypes.number,
    count: PropTypes.number
  }),
  definitions: PropTypes.array.isRequired,
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  gears: PropTypes.shape({
    forward: PropTypes.object,
    reverse: PropTypes.object
  })
}

AlphaStage.defaultProps = {
  state: {},
  gears: {}
}
