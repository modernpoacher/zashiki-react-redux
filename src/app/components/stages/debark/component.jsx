import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#zashiki-react-redux/app/common'

import Resolved from '#zashiki-react-redux/app/components/stages/debark/status/resolved'
import Rejected from '#zashiki-react-redux/app/components/stages/debark/status/rejected'
import Pending from '#zashiki-react-redux/app/components/stages/debark/status/pending'

import getDebarkProps from './get-debark-props.mjs'
import getErrorProps from './get-error-props.mjs'

const log = debug('zashiki-react-redux/app/components/stages/debark/component')

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
      onDebark
    } = this.props

    /*
     *  Dispatch and notify the Node app
     */
    return onDebark()
  }

  render () {
    const {
      status,
      ...debark
    } = this.props

    switch (status) {
      case RESOLVED:
        return (
          <Resolved
            {...getDebarkProps(debark)}
          />
        )
      case REJECTED:
        return (
          <Rejected
            {...getErrorProps(debark)}
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
    definitions: PropTypes.shape({}).isRequired,
    token: PropTypes.shape({}).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDebark: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    exception: PropTypes.shape({}).isRequired,
    token: PropTypes.shape({}).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDebark: PropTypes.func.isRequired
  })
]).isRequired
