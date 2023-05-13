import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import CheckAnswers from 'shinkansen-engine/components/pinion/check-answers'

import Token from '#app/components/stages/debark/token'

import getDebarkRoute from '#app/common/get-debark-route'

const log = debug('zashiki-react-redux:app:components:stages:debark:stage')

log('`Debark Stage` is awake')

const Debark = ({ definitions, token, onSubmit }) => (
  <form method='POST' action={getDebarkRoute()} onSubmit={(event) => {
    event.preventDefault()

    onSubmit(token)

    document.activeElement.blur()
  }}>
    {definitions
      .map(({ description, definition }, key) => (
          <CheckAnswers
            key={key}
            title={description}
            checkAnswers={definition}
          />
      ))}
    <Token
      token={token}
    />
    <button type='submit'>
      Continue
    </button>
  </form>
)

Debark.propTypes = {
  definitions: PropTypes.array.isRequired,
  token: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Debark
