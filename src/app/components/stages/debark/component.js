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

const log = debug('zashiki-react-redux:app:components:stages:debark')

export const getErrorProps = ({ exception }) => exception
export const getDebarkProps = ({ definitions, token, onSubmit }) => ({ definitions, token, onSubmit })

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
      case Signals.FAILURE:
        return (
          <Failure
            {...getErrorProps(debark)} />
        )
      case Signals.SUCCESS:
        return (
          <Success
            {...getDebarkProps(debark)} />
        )
      case Signals.IN_PROGRESS:
        return (
          <InProgress
            {...getDebarkProps(debark)} />
        )
      case Signals.NO_DECISION:
        return (
          <NoDecision
            {...getDebarkProps(debark)} />
        )
      case Signals.COMPLETE:
        return (
          <Complete
            {...getDebarkProps(debark)} />
        )
      case Signals.PENDING:
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
