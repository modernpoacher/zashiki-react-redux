import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Pinion, { ErrorSummary } from 'shinkansen-engine/lib/components/pinion'

import getResourceRoute from '@modernpoacher/zashiki-react-redux/app/common/get-resource-route'

const log = debug('zashiki-react-redux:app:components:stages:omega:omega')

log('`Omega Stage` is awake')

export default function Omega ({ resource, onSubmit, response, errors, definition, onChange }) {
  return (
    <form method='POST' action={getResourceRoute(resource)} onSubmit={(event) => {
      event.preventDefault()

      onSubmit(resource, response)
    }}>
      <ErrorSummary
        errorSummary={errors}
      />
      <Pinion
        pinion={definition}
        onChange={(key, value) => onChange(resource, { [key]: value })}
      />
      <button type='submit'>
      Continue
      </button>
    </form>
  )
}

Omega.propTypes = {
  resource: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  response: PropTypes.object.isRequired,
  errors: PropTypes.array.isRequired,
  definition: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
