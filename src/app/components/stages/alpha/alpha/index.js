import React from 'react'
import PropTypes from 'prop-types'
/*
import {
  Motor
} from 'shinkansen-motor'
*/
const Alpha = ({ definitions, response, onSubmit }) => (
  <ol className='alpha'>
    {definitions
      .map(({ resource, definition }, key) => (
        <li key={key}>
          { /*

          <Motor
            onSubmit={(response) => onSubmit(resource, response)}
            definition={definition} />

          */ }
        </li>
      ))}
  </ol>
)

Alpha.propTypes = {
  definitions: PropTypes.array.isRequired,
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Alpha
