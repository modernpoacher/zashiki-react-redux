import React from 'react'
import PropTypes from 'prop-types'

const Failure = ({ code, name, message }) => (
  <div className='embark failure'>
    <h2>{code}: {name}</h2>
    {message && (
      <p>
        {message}
      </p>
    )}
  </div>
)

Failure.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string
}

export default Failure
