import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Pinion, { ErrorSummary } from 'shinkansen-engine/lib/components/pinion'

import getResourceRoute from '@modernpoacher/zashiki-react-redux/app/common/get-resource-route'

const log = debug('zashiki-react-redux:app:components:stages:alpha:alpha')

log('`Alpha Stage` is awake')

export default function Alpha ({ definitions, onSubmit, onChange }) {
  return (
    <ol>
      {definitions
        .map(({ resource, response, errors, description, definition }, key) => (
          <li key={key}>
            <form method='POST' action={getResourceRoute(resource)} onSubmit={(event) => {
              event.preventDefault()

              onSubmit(resource, response)

              document.activeElement.blur()
            }}>
              <ErrorSummary
                title='There is a problem'
                errorSummary={errors}
              />
              <h2>{description}</h2>
              <Pinion
                pinion={definition}
                onChange={(key, value) => onChange(resource, { [key]: value })}
              />
              <button type='submit'>
              Continue
              </button>
            </form>
          </li>
        ))}
    </ol>
  )
}

Alpha.propTypes = {
  definitions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
