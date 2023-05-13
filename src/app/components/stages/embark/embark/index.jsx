import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Pinion from 'shinkansen-engine/components/pinion'
import ErrorSummary from 'shinkansen-engine/components/pinion/error-summary'

import getEmbarkRoute from '#app/common/get-embark-route'

const log = debug('zashiki-react-redux:app:components:stages:embark:stage')

log('`Embark Stage` is awake')

const Stage = ({ onSubmit, response, errors, definition, onChange }) => (
  <form method='POST' action={getEmbarkRoute()} onSubmit={(event) => {
    event.preventDefault()

    onSubmit(response)

    document.activeElement.blur()
  }}>
    <ErrorSummary
      title='There is a problem'
      errorSummary={errors}
    />
    <Pinion
      pinion={definition}
      params={{ errors }}
      onChange={(key, value) => onChange({ [key]: value })}
    />
    <button type='submit'>
      Continue
    </button>
  </form>
)

Stage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  response: PropTypes.object.isRequired,
  definition: PropTypes.object.isRequired,
  errors: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Stage
