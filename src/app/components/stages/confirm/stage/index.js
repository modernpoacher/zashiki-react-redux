import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('zashiki-react-redux:app:components:stages:confirm:stage')

log('`ConfirmStage` is awake')

const ConfirmStage = ({ definition, response, onChange, onSubmit }) => (
  <div className='confirm'>
    <h2>
      Confirmation
    </h2>
  </div>
)

ConfirmStage.propTypes = {
  definition: PropTypes.object.isRequired,
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ConfirmStage
