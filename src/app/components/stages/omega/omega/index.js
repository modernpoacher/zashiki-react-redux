import React from 'react'
import PropTypes from 'prop-types'

import Pinion from 'shinkansen-engine/lib/components/pinion'

import getResourceRoute from '@modernpoacher/zashiki-react-redux/app/common/get-resource-route'

const Omega = ({ resource, onSubmit, response, onChange, definition }) => (
  <div className='omega'>
    <form method='POST' action={getResourceRoute(resource)} onSubmit={(event) => {
      event.preventDefault()

      onSubmit(resource, response)
    }}>
      <Pinion
        onChange={(key, value) => onChange(resource, { [key]: value })}
        pinion={definition}
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
  onChange: PropTypes.func.isRequired,
  definition: PropTypes.object.isRequired
}

export default Omega
