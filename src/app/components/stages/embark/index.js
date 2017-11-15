import React from 'react'
import PropTypes from 'prop-types'

import {
  Signals
} from 'shinkansen-signals'

import Stage from './stage'

const EmbarkStage = ({ embark, onSubmit }) => (
  <Stage
    embark={embark}
    onSubmit={onSubmit} />
)

EmbarkStage.propTypes = {
  embark: PropTypes.shape({
    status: PropTypes.number.isRequired,
    definition: PropTypes.object.isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired
}

EmbarkStage.defaultProps = {
  embark: {
    status: Signals.PENDING,
    definition: {}
  },
  onSubmit: () => {}
}

export default EmbarkStage
