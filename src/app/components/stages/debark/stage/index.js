import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('zashiki-react-redux:app:components:stages:debark:stage')

log('`DebarkStage` is awake')

const DebarkStage = ({ definition, response, onChange, onSubmit }) => (
  <div className='debark'>
    <h2>
      Complete
    </h2>
  </div>
)

DebarkStage.propTypes = {
  definition: PropTypes.object.isRequired,
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default DebarkStage
