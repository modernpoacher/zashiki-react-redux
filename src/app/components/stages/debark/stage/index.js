import React from 'react'
import PropTypes from 'prop-types'

const DebarkStage = ({ onChange, onSubmit, definition }) => (
  <div className='debark'>
    <h2>
      Complete
    </h2>
  </div>
)

DebarkStage.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  definition: PropTypes.object.isRequired
}

export default DebarkStage
