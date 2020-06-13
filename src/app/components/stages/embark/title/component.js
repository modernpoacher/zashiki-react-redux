import React from 'react'
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

const log = debug('zashiki-react-redux:app:components:stages:embark:title')

log('`Embark Title` is awake')

export default function Title ({ status, description }) {
  switch (status) {
    case RESOLVED:
      return (
        <Resolved
          title={description} />
      )
    case REJECTED:
      return (
        <Rejected
          title={description} />
      )
    case PENDING:
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
  status: PENDING,
  description: 'Embark'
}
