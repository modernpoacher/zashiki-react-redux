import React from 'react'
import PropTypes from 'prop-types'
import snapshotOf, {
  getComponentElement
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Debark from '#zashiki-react-redux/app/components/navigation/stages/debark'

jest.mock('#zashiki-react-redux/app/common/get-debark-route', () => jest.fn().mockReturnValue('MOCK DEBARK ROUTE'))

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

describe('#zashiki-react-redux/app/components/navigation/stages/debark', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Debark />
      ))))
        .toMatchSnapshot()
    })
  })
})
