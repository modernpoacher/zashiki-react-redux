import React from 'react'
import PropTypes from 'prop-types'

import Pinion from 'shinkansen-engine/lib/components/pinion'

import getResourceRoute from '@modernpoacher/zashiki-react-redux/app/common/get-resource-route'

const Omega = ({ resource, onSubmit, response, definition, onChange }) => (
  <form method='POST' action={getResourceRoute(resource)} onSubmit={(event) => {
    event.preventDefault()

    onSubmit(resource, response)
  }}>
    <Pinion
      pinion={definition}
      onChange={(key, value) => onChange(resource, { [key]: value })}
    />
    <button type='submit'>
      Continue
    </button>
  </form>
)

Omega.propTypes = {
  resource: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  response: PropTypes.object.isRequired,
  definition: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Omega
