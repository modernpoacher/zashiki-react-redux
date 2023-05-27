import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import CheckAnswers from 'shinkansen-engine/components/pinion/check-answers'

import Token from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/token'

import getDebarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-debark-route'

const log = debug('zashiki-react-redux/app/components/stages/debark/stage')

log('`zashiki` is awake')

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
  definitions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  token: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Debark
