import React from 'react'
import PropTypes from 'prop-types'

import {
  Signals
} from 'shinkansen-signals'

import {
  Complete,
  Pending
} from './status'

const Embark = ({ embark: { status, definition }, onSubmit }) => {
  switch (status) {
    case Signals.COMPLETE: return (
      <Complete
        onSubmit={onSubmit}
        definition={definition} />
    )
    default:
      return <Pending />
  }
}

Embark.propTypes = {
  embark: PropTypes.shape({
    status: PropTypes.number.isRequired,
    definition: PropTypes.object.isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired
}

Embark.defaultProps = {
  embark: {
    status: Signals.PENDING,
    definition: {}
  },
  onSubmit: () => {}
}

export default Embark
