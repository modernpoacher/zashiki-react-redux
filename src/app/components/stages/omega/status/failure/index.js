import React from 'react'
import PropTypes from 'prop-types'

const Failure = ({ code, name, message }) => (
  <div className='omega failure'>
    {code ? <h2>{code}: {name}</h2> : <h2>{name}</h2> }
    {message && (
      <p>
        {message}
      </p>
    )}
  </div>
)

Failure.propTypes = {
  code: PropTypes.number,
  name: PropTypes.string.isRequired,
  message: PropTypes.string
}

export default Failure
