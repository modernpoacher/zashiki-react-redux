import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Alpha from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/alpha'
import Gears from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/gears'

const log = debug('zashiki-react-redux:app:components:stages:alpha:stage')

log('`Alpha Stage` is awake')

export default class Stage extends Component {
  getClassName () {
    return 'alpha'
  }

  render () {
    const {
      definitions,
      onChange,
      onSubmit
    } = this.props

    return (
      <div className={this.getClassName()}>
        <Alpha
          definitions={definitions}
          onChange={onChange}
          onSubmit={onSubmit} />
        <Gears />
      </div>
    )
  }
}

Stage.propTypes = {
  definitions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
