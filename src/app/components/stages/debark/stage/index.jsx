import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from '#zashiki-react-redux/debug'

import Debark from '#zashiki-react-redux/app/components/stages/debark/debark'

const log = debug('zashiki-react-redux/app/components/stages/debark/stage')

log('`zashiki` is awake')

export default class Stage extends Component {
  state = {}

  getClassName () {
    return 'debark'
  }

  render () {
    const {
      definitions,
      token,
      onSubmit
    } = this.props

    return (
      <div className={this.getClassName()}>
        <Debark
          definitions={definitions}
          token={token}
          onSubmit={onSubmit}
        />
      </div>
    )
  }
}

Stage.propTypes = {
  definitions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  token: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired
}
