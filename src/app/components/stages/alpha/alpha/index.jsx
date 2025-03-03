import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Pinion from 'shinkansen-engine/components/pinion'
import ErrorSummary from 'shinkansen-engine/components/pinion/error-summary'

import getResourceRoute from '#zashiki-react-redux/app/common/get-resource-route'

const log = debug('zashiki-react-redux/app/components/stages/alpha/alpha')

log('`zashiki` is awake')

function Omega ({ resource, onSubmit, response, errors, description, definition, onChange }) {
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

      {description ? <h2>{description}</h2> : null}

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
  resource: PropTypes.shape({}).isRequired,
  response: PropTypes.shape({}).isRequired,
  errors: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  description: PropTypes.string,
  definition: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

function getRenderOmega (onSubmit, onChange) {
  return function renderOmega ({ resource, response, errors, description, definition }, key) {
    return (
      <li key={key}>
        <Omega
          resource={resource}
          response={response}
          errors={errors}
          description={description}
          definition={definition}
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </li>
    )
  }
}

export default function Alpha ({ definitions, onSubmit, onChange }) {
  return (
    <ol>
      {definitions
        .map(getRenderOmega(onSubmit, onChange))}
    </ol>
  )
}

Alpha.propTypes = {
  definitions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
