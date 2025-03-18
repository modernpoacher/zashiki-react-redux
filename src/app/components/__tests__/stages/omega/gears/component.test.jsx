import React from 'react'
import PropTypes from 'prop-types'
import snapshotOf, {
  getComponentElement
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Gears from '#zashiki-react-redux/app/components/stages/omega/gears/component'

jest.mock('shinkansen-engine/components/signals', () => ({
  OMEGA_PATTERN: 'MOCK OMEGA PATTERN'
}))

/**
 *  @param {{ to: string | { pathname: string }, children: React.ReactNode | React.ReactNode[] }} props
 *  @returns {React.JSX.Element}
 */
function MockLink ({ to, children }) {
  if (typeof to === 'string') {
    return (
      <a href={to} className='mock-link'>
        {children}
      </a>
    )
  }

  const {
    pathname
  } = to

  return (
    <a href={pathname} className='mock-link'>
      {children}
    </a>
  )
}

MockLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({})
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

jest.mock('react-router', () => {
  return {
    __esModule: true,
    Link: MockLink
  }
})

describe('#zashiki-react-redux/app/components/stages/omega/gears/component', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Gears />
      ))))
        .toMatchSnapshot()
    })
  })

  it('renders `reverse`', () => {
    expect(snapshotOf(getComponentElement(render(
      <Gears
        reverse={{ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }}
      />
    ))))
      .toMatchSnapshot()
  })

  it('renders `forward`', () => {
    expect(snapshotOf(getComponentElement(render(
      <Gears
        forward={{ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }}
      />
    ))))
      .toMatchSnapshot()
  })

  it('renders `reverse` and `forward`', () => {
    expect(snapshotOf(getComponentElement(render(
      <Gears
        reverse={{ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }}
        forward={{ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }}
      />
    ))))
      .toMatchSnapshot()
  })
})
