import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Embark from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/embark'

const log = debug('zashiki-react-redux:app:components:stages:embark:stage')

log('`Embark Stage` is awake')

export default class Stage extends Component {
  getClassName () {
    return 'embark'
  }

  render () {
    const {
      definition,
      response,
      onChange,
      onSubmit
    } = this.props

    return (
      <div className={this.getClassName()}>
        <Embark
          definition={definition}
          response={response}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    )
  }
}

Stage.propTypes = {
  definition: PropTypes.object.isRequired,
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
