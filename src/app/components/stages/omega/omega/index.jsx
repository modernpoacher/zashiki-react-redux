import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Pinion from 'shinkansen-engine/components/pinion'
import ErrorSummary from 'shinkansen-engine/components/pinion/error-summary'

import getResourceRoute from '#app/common/get-resource-route'

const log = debug('zashiki-react-redux:app:components:stages:omega:omega')

log('`Omega Stage` is awake')

export default function Omega ({ resource, onSubmit, response, errors, definition, onChange }) {
  return (
    <form method='POST' action={getResourceRoute(resource)} onSubmit={(event) => {
      event.preventDefault()

      onSubmit(resource, response)

      document.activeElement.blur()
    }}>
      <ErrorSummary
        title='There is a problem'
        errorSummary={errors}
      />
      <Pinion
        pinion={definition}
        params={{ errors }}
        onChange={(key, value) => onChange(resource, { [key]: value })}
      />
      <button type='submit'>
        Continue
      </button>
    </form>
  )
}

Omega.propTypes = {
  resource: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired,
  response: PropTypes.shape().isRequired,
  errors: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  definition: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired
}
