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

const log = debug('zashiki-react-redux:app:components:stages:embark')

export const getErrorProps = ({ exception }) => exception
export const getEmbarkProps = ({ definition, response, onChange, onSubmit }) => ({ definition, response, onChange, onSubmit })

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
      case Signals.FAILURE:
        return (
          <Failure
            {...getErrorProps(embark)} />
        )
      case Signals.SUCCESS:
        return (
          <Success
            {...getEmbarkProps(embark)} />
        )
      case Signals.IN_PROGRESS:
        return (
          <InProgress
            {...getEmbarkProps(embark)} />
        )
      case Signals.NO_DECISION:
        return (
          <NoDecision
            {...getEmbarkProps(embark)} />
        )
      case Signals.COMPLETE:
        return (
          <Complete
            {...getEmbarkProps(embark)} />
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
