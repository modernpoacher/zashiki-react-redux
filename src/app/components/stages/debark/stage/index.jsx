import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Debark from '#app/components/stages/debark/debark'

const log = debug('zashiki-react-redux:app:components:stages:debark:stage')

log('`Debark Stage` is awake')

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
  definitions: PropTypes.array.isRequired,
  token: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}
