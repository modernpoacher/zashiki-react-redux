import React from 'react'
import PropTypes from 'prop-types'

export function renderMockGear ({ alpha, omega } = {}, pattern = 'MOCK DEFAULT PATTERN') {
  if (alpha && omega) {
    return (
      <li>{alpha} - {omega} - {pattern}</li>
    )
  }

  if (alpha) {
    return (
      <li>{alpha} - {pattern}</li>
    )
  }

  if (omega) {
    return (
      <li>{omega} - {pattern}</li>
    )
  }

  return (
    <li>{pattern}</li>
  )
}

export default function MockGears ({ reverse, forward, pattern }) {
  const reverseGear = renderMockGear(reverse, pattern)
  const forwardGear = renderMockGear(forward, pattern)

  return (
    <ol className='mock-gears'>
      {reverseGear}
      {forwardGear}
    </ol>
  )
}

MockGears.propTypes = {
  reverse: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }),
  forward: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }),
  pattern: PropTypes.string
}
