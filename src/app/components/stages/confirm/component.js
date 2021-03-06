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

const log = debug('zashiki-react-redux:app:components:stages:confirm')

export const getConfirmProps = ({ definition, response, onSubmit }) => ({ definition, response, onSubmit })
export const getErrorProps = ({ exception }) => exception

log('`Confirm Stage` is awake')

export default class Stage extends Component {
  /*
   *  List routes
   */
  componentDidMount () {
    log('componentDidMount')

    const {
      onConfirm
    } = this.props

    /*
     *  Dispatch and notify the Node app
     */
    return onConfirm()
  }

  render () {
    const {
      status,
      ...confirm
    } = this.props

    switch (status) {
      case RESOLVED:
        return (
          <Resolved
            {...getConfirmProps(confirm)} />
        )
      case REJECTED:
        return (
          <Rejected
            {...getErrorProps(confirm)} />
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
    definition: PropTypes.object.isRequired,
    response: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    exception: PropTypes.object.isRequired,
    response: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
  })
]).isRequired
