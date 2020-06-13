import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('zashiki-react-redux:app:components:stages:debark:title:stage')

log('`Debark Title` is awake')

export default class Title extends Component {
  getClassName () {
    return 'debark'
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
  title: 'Debark'
}
