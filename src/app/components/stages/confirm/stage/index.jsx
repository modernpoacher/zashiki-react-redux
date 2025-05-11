import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from '#zashiki-react-redux/debug'

const log = debug('zashiki-react-redux/app/components/stages/confirm/stage')

log('`zashiki` is awake')

export default class Stage extends Component {
  state = {}

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
  definition: PropTypes.shape({}).isRequired,
  response: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired
}
