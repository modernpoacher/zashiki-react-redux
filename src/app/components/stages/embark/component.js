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

const log = debug('zashiki-react-redux:app:components:stages:embark')

export const getEmbarkProps = ({ definition, response, onChange, onSubmit }) => ({ definition, response, onChange, onSubmit })
export const getErrorProps = ({ exception }) => exception

log('`Stage` is awake')

export default class Stage extends Component {
  /*
   *  List routes
   */
  componentDidMount () {
    log('componentDidMount')

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
            {...getEmbarkProps(embark)} />
        )
      case REJECTED:
        return (
          <Rejected
            {...getErrorProps(embark)} />
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
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onEmbark: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    exception: PropTypes.object.isRequired,
    response: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onEmbark: PropTypes.func.isRequired
  })
]).isRequired
