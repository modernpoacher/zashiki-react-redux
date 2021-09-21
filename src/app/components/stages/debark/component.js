import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '@modernpoacher/zashiki-react-redux/app/common'

import Resolved from './status/resolved'
import Rejected from './status/rejected'
import Pending from './status/pending'

const log = debug('zashiki-react-redux:app:components:stages:debark:component')

export const getDebarkProps = ({ definitions, token, onSubmit }) => ({ definitions, token, onSubmit })
export const getErrorProps = ({ exception }) => exception

log('`Debark Stage` is awake')

export default class Stage extends Component {
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
            {...getDebarkProps(debark)} />
        )
      case REJECTED:
        return (
          <Rejected
            {...getErrorProps(debark)} />
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
    definitions: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDebark: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    exception: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDebark: PropTypes.func.isRequired
  })
]).isRequired
