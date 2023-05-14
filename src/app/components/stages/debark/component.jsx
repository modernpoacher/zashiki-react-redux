import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#app/common'

import Resolved from './status/resolved/index.jsx'
import Rejected from './status/rejected/index.jsx'
import Pending from './status/pending/index.jsx'

const log = debug('zashiki-react-redux:app:components:stages:debark:component')

export const getDebarkProps = ({ definitions, token, onSubmit }) => ({ definitions, token, onSubmit })
export const getErrorProps = ({ exception }) => exception

log('`Debark Stage` is awake')

export default class Stage extends Component {
  state = {}

  /*
   *  List routes
   */
  componentDidMount () {
    log('componentDidMount')

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
    definitions: PropTypes.shape().isRequired,
    token: PropTypes.shape().isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDebark: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    exception: PropTypes.shape().isRequired,
    token: PropTypes.shape().isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDebark: PropTypes.func.isRequired
  })
]).isRequired
