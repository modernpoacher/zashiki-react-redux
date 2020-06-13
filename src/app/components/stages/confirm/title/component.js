import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

import Complete from './status/complete'
import Failure from './status/failure'
import Success from './status/success'
import InProgress from './status/in-progress'
import NoDecision from './status/no-decision'
import Pending from './status/pending'

const log = debug('zashiki-react-redux:app:components:stages:confirm:title')

log('`Confirm Title` is awake')

export default function Title ({ status, description }) {
  switch (status) {
    case Signals.FAILURE:
      return (
        <Failure
          title={description} />
      )
    case Signals.SUCCESS:
      return (
        <Success
          title={description} />
      )
    case Signals.IN_PROGRESS:
      return (
        <InProgress
          title={description} />
      )
    case Signals.NO_DECISION:
      return (
        <NoDecision
          title={description} />
      )
    case Signals.COMPLETE:
      return (
        <Complete
          title={description} />
      )
    case Signals.PENDING:
      return (
        <Pending />
      )
  }

  return null
}

Title.propTypes = {
  status: PropTypes.number,
  description: PropTypes.string
}

Title.defaultProps = {
  status: Signals.PENDING,
  description: 'Confirm'
}
