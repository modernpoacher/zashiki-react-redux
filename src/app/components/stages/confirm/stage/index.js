import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('zashiki-react-redux:app:components:stages:confirm:stage')

log('`Confirm Stage` is awake')

export default class Stage extends Component {
  getClassName () {
    return 'confirm'
  }

  render () {
    return (
      <div className={this.getClassName()}>
        <h2>
          Confirmation
        </h2>
      </div>
    )
  }
}

Stage.propTypes = {
  definition: PropTypes.object.isRequired,
  response: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}
