import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('zashiki-react-redux:app:components:stages:omega:title:stage')

log('`Omega Stage` is awake')

export default class Stage extends Component {
  getClassName () {
    return 'omega'
  }

  render () {
    log('render')

    const {
      title
    } = this.props

    return (
      <header className={this.getClassName()}>
        <h1>
          {title}
        </h1>
      </header>
    )
  }
}

Stage.propTypes = {
  title: PropTypes.string.isRequired
}

Stage.defaultProps = {
  title: 'Omega'
}
