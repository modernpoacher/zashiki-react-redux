import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export function renderMockGear ({ alpha, omega } = {}, pattern = 'MOCK DEFAULT PATTERN') {
  if (alpha && omega) {
    return (
      <Fragment>
        <dt>Alpha</dt>
        <dd>{alpha}</dd>
        <dt>Omega</dt>
        <dd>{omega}</dd>
        <dt>Pattern</dt>
        <dd>{pattern}</dd>
      </Fragment>
    )
  }

  if (alpha) {
    return (
      <Fragment>
        <dt>Alpha</dt>
        <dd>{alpha}</dd>
        <dt>Pattern</dt>
        <dd>{pattern}</dd>
      </Fragment>
    )
  }

  if (omega) {
    return (
      <Fragment>
        <dt>Omega</dt>
        <dd>{omega}</dd>
        <dt>Pattern</dt>
        <dd>{pattern}</dd>
      </Fragment>
    )
  }
}

export default function MockGears ({ reverse, forward, pattern }) {
  const reverseGear = renderMockGear(reverse, pattern)
  const forwardGear = renderMockGear(forward, pattern)

  if (reverseGear || forwardGear) {
    return (
      <dl className='mock-gears'>
        {reverseGear}
        {forwardGear}
      </dl>
    )
  }

  return null
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
