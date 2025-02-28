import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Alpha from '#zashiki-react-redux/app/components/stages/alpha/alpha'
import Gears from '#zashiki-react-redux/app/components/stages/alpha/gears'

const log = debug('zashiki-react-redux/app/components/stages/alpha/stage')

log('`zashiki` is awake')

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
          onSubmit={onSubmit}
        />

        <Gears />
      </div>
    )
  }
}

Stage.propTypes = {
  definitions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
