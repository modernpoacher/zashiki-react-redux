import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/count'
import Alpha from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/alpha'

import Gears from 'shinkansen-engine/lib/components/gears'

const log = debug('zashiki-react-redux:app:components:stages:alpha:stage')

log('`Alpha Stage` is awake')

export default class Stage extends Component {
  getClassName () {
    return 'alpha'
  }

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
        onChange,
        onSubmit,
        gears: {
          reverse,
          forward
        }
      } = this.props

      return (
        <div className={this.getClassName()}>
          <Count
            index={index}
            count={count} />
          <Alpha
            definitions={definitions}
            onChange={onChange}
            onSubmit={onSubmit} />
          <Gears
            reverse={reverse}
            forward={forward}
            pattern={Signals.ALPHA_PATTERN} />
        </div>
      )
    }

    return null
  }
}

Stage.propTypes = {
  state: PropTypes.shape({
    index: PropTypes.number,
    count: PropTypes.number
  }),
  definitions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  gears: PropTypes.shape({
    forward: PropTypes.object,
    reverse: PropTypes.object
  })
}

Stage.defaultProps = {
  state: {},
  gears: {}
}
