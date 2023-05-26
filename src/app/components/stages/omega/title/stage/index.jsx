import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('zashiki-react-redux/app/components/stages/omega/title/stage')

log('`zashiki` is awake')

export default class Stage extends Component {
  state = {}

  getClassName () {
    return 'omega'
  }

  render () {
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
