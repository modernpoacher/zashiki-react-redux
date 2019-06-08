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
const getEmbarkProps = ({ definition, onSubmit }) => ({ definition, onSubmit })

export default class Embark extends Component {
  /**
   *  List routes
   */
  componentDidMount () { // console.log('(EmbarkStage)componentDidMount()') // eslint-disable-line
    const {
      onEmbark
    } = this.props

    /**
     *  Dispatch and notify the Node app
     */
    onEmbark()
  }

  render () {
    const {
      status,
      ...embark
    } = this.props

    switch (status) {
      case Signals.FAILURE: return (
        <Failure
          {...getErrorProps(embark)} />
      )
      case Signals.SUCCESS: return (
        <Success
          {...getEmbarkProps(embark)} />
      )
      case Signals.IN_PROGRESS: return (
        <InProgress
          {...getEmbarkProps(embark)} />
      )
      case Signals.NO_DECISION: return (
        <NoDecision
          {...getEmbarkProps(embark)} />
      )
      case Signals.COMPLETE: return (
        <Complete
          {...getEmbarkProps(embark)} />
      )
      default:return (
        <Pending
          {...getEmbarkProps(embark)} />
      )
    }
  }
}

Embark.propTypes = PropTypes.oneOfType([
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    definition: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onEmbark: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    status: PropTypes.number.isRequired,
    exception: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onEmbark: PropTypes.func.isRequired
  })
]).isRequired
