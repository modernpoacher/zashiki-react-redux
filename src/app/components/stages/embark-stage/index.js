import React from 'react'
import PropTypes from 'prop-types'
import {
  Signals
} from 'shinkansen-signals'

import Embark from './embark'

const EmbarkStage = ({ embark: { status, definition }, onSubmit }) => (
  <Embark
    status={status}
    definition={definition}
    onSubmit={onSubmit} />
)

EmbarkStage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  embark: PropTypes.shape({
    status: PropTypes.number.isRequired,
    definition: PropTypes.object.isRequired
  }).isRequired
}

EmbarkStage.defaultProps = {
  onSubmit: () => {},
  embark: {
    status: Signals.PENDING,
    definition: {}
  }
}

export default EmbarkStage
