import React from 'react'
import PropTypes from 'prop-types'

import {
  Motor
} from 'shinkansen-motor'

const Omega = ({ onSubmit, definition }) => (
  <div className='omega'>
    <Motor
      onSubmit={onSubmit}
      definition={definition} />
  </div>
)

Omega.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  definition: PropTypes.object.isRequired
}

export default Omega
