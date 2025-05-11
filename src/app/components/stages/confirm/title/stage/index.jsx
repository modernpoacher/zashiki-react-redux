import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from '#zashiki-react-redux/debug'

const log = debug('zashiki-react-redux/app/components/stages/confirm/title/stage')

log('`zashiki` is awake')

const DEFAULT_TITLE = 'Confirm'

export default class Title extends Component {
  getClassName () {
    return 'confirm'
  }

  render () {
    const {
      title = DEFAULT_TITLE
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

Title.propTypes = {
  title: PropTypes.string
}
