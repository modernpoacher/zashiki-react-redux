import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('zashiki-react-redux/app/components/stages/debark/token')

log('`zashiki` is awake')

const Token = ({ token }) => (
  Object.entries(token)
    .map(([name, value], key) => (
      <input key={key} type='hidden' name={name} value={value} />
    ))
)

Token.propTypes = {
  token: PropTypes.shape({}).isRequired
}

export default Token
