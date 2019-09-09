import React from 'react'
import PropTypes from 'prop-types'

const DebarkStage = ({ definition, onSubmit }) => (
  <div className='debark'>
    <h2>
      Complete
    </h2>
  </div>
)

DebarkStage.propTypes = {
  definition: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default DebarkStage
