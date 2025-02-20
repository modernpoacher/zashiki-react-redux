import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'

import Debark from '@modernpoacher/zashiki-react-redux/app/components/navigation/stages/debark'

jest.mock('@modernpoacher/zashiki-react-redux/app/common/get-debark-route')

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

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/stages/debark', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(renderer.create(<Debark />).toJSON())
        .toMatchSnapshot()
    })
  })
})
