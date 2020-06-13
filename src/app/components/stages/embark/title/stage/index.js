import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('zashiki-react-redux:app:components:stages:embark:title:stage')

log('`Embark Title` is awake')

export default class Title extends Component {
  getClassName () {
    return 'embark'
  }

  render () {
    log('render')

    const {
      title
    } = this.props

    return (
      <header>
        <h1 className={this.getClassName()}>
          {title}
        </h1>
      </header>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

Title.defaultProps = {
  title: 'Embark'
}
