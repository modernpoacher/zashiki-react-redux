import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import { CheckAnswers } from 'shinkansen-engine/lib/components/pinion'

import getDebarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-debark-route'

const log = debug('zashiki-react-redux:app:components:stages:debark:stage')

log('`DebarkStage` is awake')

const DebarkStage = ({ definitions, token, onSubmit }) => (
  <div className='debark'>
    <form method='POST' action={getDebarkRoute()} onSubmit={(event) => {
      event.preventDefault()

      onSubmit(token)
    }}>
      {definitions
        .map(({ description, definition }, key) => (
          <CheckAnswers
            key={key}
            title={description}
            checkAnswers={definition}
          />
        ))}
      <button type='submit'>
        Continue
      </button>
    </form>
  </div>
)

DebarkStage.propTypes = {
  definitions: PropTypes.array.isRequired,
  token: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default DebarkStage
