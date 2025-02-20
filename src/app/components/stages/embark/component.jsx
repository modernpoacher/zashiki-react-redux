import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '@modernpoacher/zashiki-react-redux/app/common'

import Resolved from './status/resolved/index.jsx'
import Rejected from './status/rejected/index.jsx'
import Pending from './status/pending/index.jsx'

import getEmbarkProps from './get-embark-props.mjs'
import getErrorProps from './get-error-props.mjs'

const log = debug('zashiki-react-redux/app/components/stages/embark/component')

log('`zashiki` is awake')

export default class Stage extends Component {
  state = {}

  /*
   *  List routes
   */
  componentDidMount () {
    /*
     *  log('componentDidMount')
     */

    const {
      onEmbark
    } = this.props

    /*
     *  Dispatch and notify the Node app
     */
    return onEmbark()
  }

  render () {
    const {
      status,
      ...embark
    } = this.props

    switch (status) {
      case RESOLVED:
        return (
          <Resolved
            {...getEmbarkProps(embark)}
          />
        )
      case REJECTED:
        return (
          <Rejected
            {...getErrorProps(embark)}
          />
        )
      case PENDING:
        return (
          <Pending />
        )
    }

    return null
  }
}

Stage.propTypes = PropTypes.oneOfType([
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    definition: PropTypes.shape({}).isRequired,
    response: PropTypes.shape({}).isRequired,
    errors: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onEmbark: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    exception: PropTypes.shape({}).isRequired,
    response: PropTypes.shape({}).isRequired,
    errors: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onEmbark: PropTypes.func.isRequired
  })
]).isRequired
