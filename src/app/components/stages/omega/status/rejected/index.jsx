import React from 'react'
import PropTypes from 'prop-types'

export default function Rejected ({ code, name, message }) {
  return (
    <div className='omega rejected'>
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
  code: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  name: PropTypes.string.isRequired,
  message: PropTypes.string
}
