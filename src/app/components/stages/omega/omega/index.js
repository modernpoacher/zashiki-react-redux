import React from 'react'
import PropTypes from 'prop-types'
/*
import {
  Motor
} from 'shinkansen-motor'
*/
const Omega = ({ onChange, onSubmit, resource, definition }) => (
  <div className='omega'>
    { /*

    <Motor
      onSubmit={(response) => onSubmit(resource, response)}
      definition={definition} />

    */ }
  </div>
)

Omega.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  resource: PropTypes.object, // .isRequired,
  definition: PropTypes.object.isRequired
}

export default Omega
