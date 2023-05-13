import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'

import Gears from '#app/components/stages/alpha/gears/component'

jest.mock('shinkansen-engine/components/signals', () => ({
  OMEGA_PATTERN: 'MOCK OMEGA PATTERN'
}))

function MockLink ({ to, children }) {
  return (
    <a href={to} className='mock-link'>
      {children}
    </a>
  )
}

MockLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape()
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

jest.mock('react-router-dom', () => {
  return {
    __esModule: true,
    Link: MockLink
  }
})

describe('#app/components/stages/alpha/gears/component', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Gears />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  it('renders `reverse`', () => {
    const component = (
      <Gears reverse={{ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }} />
    )

    expect(renderer.create(component).toJSON())
      .toMatchSnapshot()
  })

  it('renders `forward`', () => {
    const component = (
      <Gears forward={{ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }} />
    )

    expect(renderer.create(component).toJSON())
      .toMatchSnapshot()
  })

  it('renders `reverse` and `forward`', () => {
    const component = (
      <Gears
        reverse={{ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }}
        forward={{ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }}
      />
    )

    expect(renderer.create(component).toJSON())
      .toMatchSnapshot()
  })
})
