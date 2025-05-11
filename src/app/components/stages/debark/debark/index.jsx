import React from 'react'
import PropTypes from 'prop-types'
import debug from '#zashiki-react-redux/debug'

import CheckAnswers from 'shinkansen-engine/components/pinion/check-answers'

import Token from '#zashiki-react-redux/app/components/stages/debark/token'

import getDebarkRoute from '#zashiki-react-redux/app/common/get-debark-route'

const log = debug('zashiki-react-redux/app/components/stages/debark/stage')

log('`zashiki` is awake')

function renderCheckAnswers ({ description, definition }, key) {
  return (
    <CheckAnswers
      key={key}
      title={description}
      checkAnswers={definition}
    />
  )
}

function Debark ({ definitions, token, onSubmit }) {
  return (
    <form method='POST' action={getDebarkRoute()} onSubmit={(event) => {
      event.preventDefault()

      onSubmit(token)

      document.activeElement.blur()
    }}>
      {definitions
        .map(renderCheckAnswers)}
      <Token
        token={token}
      />
      <button type='submit'>
        Continue
      </button>
    </form>
  )
}

Debark.propTypes = {
  definitions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  token: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Debark
