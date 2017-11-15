import React from 'react'
import PropTypes from 'prop-types'
import {
  Motor
} from 'shinkansen-motor'

const Alpha = ({ onSubmit, definitions }) => (
  <ol className='alpha'>
    {definitions
      .map(({ resource, definition }, key) => (
        <li key={key}>
          <Motor
            onSubmit={(response) => onSubmit(resource, response)}
            definition={definition} />
        </li>
      ))}
  </ol>
)

Alpha.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  definitions: PropTypes.array.isRequired
}

export default Alpha
