import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Embark from '#app/components/stages/embark/embark'

const log = debug('zashiki-react-redux:app:components:stages:embark:stage')

log('`Embark Stage` is awake')

export default class Stage extends Component {
  state = {}

  getClassName () {
    return 'embark'
  }

  render () {
    const {
      definition,
      response,
      errors,
      onChange,
      onSubmit
    } = this.props

    return (
      <div className={this.getClassName()}>
        <Embark
          definition={definition}
          response={response}
          errors={errors}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    )
  }
}

Stage.propTypes = {
  definition: PropTypes.shape().isRequired,
  response: PropTypes.shape().isRequired,
  errors: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
