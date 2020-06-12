import React from 'react'
import PropTypes from 'prop-types'

import Pinion from 'shinkansen-engine/lib/components/pinion'

import getResourceRoute from '@modernpoacher/zashiki-react-redux/app/common/get-resource-route'

const Omega = ({ resource, onSubmit, response, description, definition, onChange }) => (
  <div className='omega'>
    <form method='POST' action={getResourceRoute(resource)} onSubmit={(event) => {
      event.preventDefault()

      onSubmit(resource, response)
    }}>
      <h2>{description}</h2>
      <Pinion
        pinion={definition}
        onChange={(key, value) => onChange(resource, { [key]: value })}
      />
      <button type='submit'>
        Continue
      </button>
    </form>
  </div>
)

Omega.propTypes = {
  resource: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  response: PropTypes.object.isRequired,
  definition: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Omega
