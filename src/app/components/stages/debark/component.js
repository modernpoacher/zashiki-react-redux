import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Signals
} from 'shinkansen-signals'

import Complete from './status/complete'
import Failure from './status/failure'
import Success from './status/success'
import InProgress from './status/in-progress'
import NoDecision from './status/no-decision'
import Pending from './status/pending'

const getErrorProps = ({ exception }) => exception
const getDebarkProps = ({ definition, onSubmit }) => ({ definition, onSubmit })

export default class Debark extends Component {
  /**
   *  List routes
   */
  componentDidMount () { // console.log('(DebarkStage)componentDidMount()') // eslint-disable-line
    const {
      onDebark
    } = this.props

    /**
     *  Dispatch and notify the Node app
     */
    onDebark()
  }

  render () {
    const {
      status,
      ...debark
    } = this.props

    switch (status) {
      case Signals.FAILURE: return (
        <Failure
          {...getErrorProps(debark)} />
      )
      case Signals.SUCCESS: return (
        <Success
          {...getDebarkProps(debark)} />
      )
      case Signals.IN_PROGRESS: return (
        <InProgress
          {...getDebarkProps(debark)} />
      )
      case Signals.NO_DECISION: return (
        <NoDecision
          {...getDebarkProps(debark)} />
      )
      case Signals.COMPLETE: return (
        <Complete
          {...getDebarkProps(debark)} />
      )
      default:return (
        <Pending
          {...getDebarkProps(debark)} />
      )
    }
  }
}

Debark.propTypes = PropTypes.oneOfType([
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    definition: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDebark: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    exception: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDebark: PropTypes.func.isRequired
  })
]).isRequired
