import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#zashiki-react-redux/app/common'

import Resolved from '#zashiki-react-redux/app/components/stages/confirm/title/status/resolved'
import Rejected from '#zashiki-react-redux/app/components/stages/confirm/title/status/rejected'
import Pending from '#zashiki-react-redux/app/components/stages/confirm/title/status/pending'

const log = debug('zashiki-react-redux/app/components/stages/confirm/title/component')

log('`zashiki` is awake')

const DEFAULT_STATUS = PENDING
const DEFAULT_DESCRIPTION = 'Confirm'

export default function Title ({ status = DEFAULT_STATUS, description = DEFAULT_DESCRIPTION }) {
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
  status: PropTypes.number,
  description: PropTypes.string
}
