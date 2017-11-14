import React from 'react'
import PropTypes from 'prop-types'
import {
  Signals
} from 'shinkansen-signals'

import Debark from './debark'

const DebarkStage = ({ debark: { status, definition }, onSubmit }) => (
  <Debark
    status={status}
    definition={definition}
    onSubmit={onSubmit} />
)

DebarkStage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  debark: PropTypes.shape({
    status: PropTypes.number.isRequired,
    definition: PropTypes.object.isRequired
  }).isRequired
}

DebarkStage.defaultProps = {
  onSubmit: () => {},
  debark: {
    status: Signals.PENDING,
    definition: {}
  }
}

export default DebarkStage
