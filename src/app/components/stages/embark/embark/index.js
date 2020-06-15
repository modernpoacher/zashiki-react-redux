import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Pinion from 'shinkansen-engine/lib/components/pinion'

import getEmbarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-embark-route'

const log = debug('zashiki-react-redux:app:components:stages:embark:stage')

log('`Embark Stage` is awake')

const Stage = ({ onSubmit, response, onChange, definition }) => (
  <form method='POST' action={getEmbarkRoute()} onSubmit={(event) => {
    event.preventDefault()

    onSubmit(response)
  }}>
    <Pinion
      onChange={(key, value) => onChange({ [key]: value })}
      pinion={definition}
    />
    <button type='submit'>
      Continue
    </button>
  </form>
)

Stage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  definition: PropTypes.object.isRequired
}

export default Stage
