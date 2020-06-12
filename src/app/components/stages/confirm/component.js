import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

import Complete from './status/complete'
import Failure from './status/failure'
import Success from './status/success'
import InProgress from './status/in-progress'
import NoDecision from './status/no-decision'
import Pending from './status/pending'

const log = debug('zashiki-react-redux:app:components:stages:confirm')

export const getErrorProps = ({ exception }) => exception
export const getConfirmProps = ({ definition, response, onChange, onSubmit }) => ({ definition, response, onChange, onSubmit })

log('`ConfirmStage` is awake')

export default class ConfirmStage extends Component {
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
      case Signals.FAILURE:
        return (
          <Failure
            {...getErrorProps(confirm)} />
        )
      case Signals.SUCCESS:
        return (
          <Success
            {...getConfirmProps(confirm)} />
        )
      case Signals.IN_PROGRESS:
        return (
          <InProgress
            {...getConfirmProps(confirm)} />
        )
      case Signals.NO_DECISION:
        return (
          <NoDecision
            {...getConfirmProps(confirm)} />
        )
      case Signals.COMPLETE:
        return (
          <Complete
            {...getConfirmProps(confirm)} />
        )
      default:
        return (
          <Pending
            {...getConfirmProps(confirm)} />
        )
    }
  }
}

ConfirmStage.propTypes = PropTypes.oneOfType([
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    definition: PropTypes.object.isRequired,
    response: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    exception: PropTypes.object.isRequired,
    response: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
  })
]).isRequired
