import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'

import IndexPage from '@modernpoacher/zashiki-react-redux/app/components/navigation/index-page'

/**
 * @param {{ to: string | { pathname: string }, children: React.ReactNode | React.ReactNode[] }} param0
 * @returns {React.JSX.Element}
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

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/index-page', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(renderer.create(<IndexPage />).toJSON())
        .toMatchSnapshot()
    })
  })
})
