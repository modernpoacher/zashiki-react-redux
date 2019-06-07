import React from 'react'
import PropTypes from 'prop-types'

import {
  Signals
} from 'shinkansen-signals'

import Debark from './stage'

const DebarkStage = ({ debark, onSubmit }) => (
  <Debark
    debark={debark}
    onSubmit={onSubmit} />
)

DebarkStage.propTypes = {
  debark: PropTypes.oneOfType([
    PropTypes.shape({
      status: PropTypes.number.isRequired,
      exception: PropTypes.object.isRequired
    }),
    PropTypes.shape({
      status: PropTypes.number.isRequired,
      definition: PropTypes.object.isRequired
    })
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired
}

DebarkStage.defaultProps = {
  debark: {
    status: Signals.PENDING,
    definition: {}
  },
  onSubmit: () => {}
}

export default DebarkStage
