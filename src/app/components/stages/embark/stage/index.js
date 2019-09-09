import React from 'react'
import PropTypes from 'prop-types'

import {
  Motor
} from 'shinkansen-motor'

const EmbarkStage = ({ definition, onSubmit }) => (
  <div className='embark'>
    <Motor
      onSubmit={onSubmit}
      definition={definition} />
  </div>
)

EmbarkStage.propTypes = {
  definition: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default EmbarkStage
