import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#app/common'

import Resolved from './status/resolved/index.jsx'
import Rejected from './status/rejected/index.jsx'
import Pending from './status/pending/index.jsx'

const log = debug('zashiki-react-redux/app/components/stages/alpha/title/component')

log('`zashiki` is awake')

export default function Title ({ status, description }) {
  switch (status) {
    case RESOLVED:
      return (
        <Resolved
          title={description}
        />
      )
    case REJECTED:
      return (
        <Rejected
          title={description}
        />
      )
    case PENDING:
      return (
        <Pending />
      )
  }

  return null
}

Title.propTypes = {
  status: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}

Title.defaultProps = {
  status: PENDING,
  description: 'Alpha'
}
