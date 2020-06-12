import React from 'react'
import PropTypes from 'prop-types'

import Pinion from 'shinkansen-engine/lib/components/pinion'

import getResourceRoute from '@modernpoacher/zashiki-react-redux/app/common/get-resource-route'

const Alpha = ({ definitions, onSubmit, onChange }) => (
  <ol>
    {definitions
      .map(({ resource, response, description, definition }, key) => (
        <li key={key}>
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
        </li>
      ))}
  </ol>
)

Alpha.propTypes = {
  definitions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Alpha
