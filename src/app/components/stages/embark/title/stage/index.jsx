import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('zashiki-react-redux/app/components/stages/embark/title/stage')

log('`zashiki` is awake')

const TITLE = 'Embark'

export default class Title extends Component {
  getClassName () {
    return 'embark'
  }

  render () {
    const {
      title = TITLE
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
