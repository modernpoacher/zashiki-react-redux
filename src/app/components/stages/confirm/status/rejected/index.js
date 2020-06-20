import React from 'react'
import PropTypes from 'prop-types'

export default function Rejected ({ code, name, message }) {
  return (
    <div className='confirm rejected'>
      {code ? <h2>{code}: {name}</h2> : <h2>{name}</h2> }
      {message && (
        <p>
          {message}
        </p>
      )}
    </div>
  )
}

Rejected.propTypes = {
  code: PropTypes.number,
  name: PropTypes.string.isRequired,
  message: PropTypes.string
}
