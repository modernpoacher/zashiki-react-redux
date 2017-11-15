import React from 'react'
import PropTypes from 'prop-types'

import {
  Motor
} from 'shinkansen-motor'

const Complete = ({ definition, onSubmit }) => (
  <div className='embark'>
    <Motor
      onSubmit={onSubmit}
      definition={definition} />
  </div>
)

Complete.propTypes = {
  definition: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

Complete.defaultProps = {
  definition: {},
  onSubmit: () => {}
}

export default Complete
