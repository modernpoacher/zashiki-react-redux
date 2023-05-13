import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'

import Embark from '#app/components/navigation/stages/embark'

jest.mock('#app/common/get-embark-route')

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

describe('#app/components/navigation/stages/embark', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(renderer.create(<Embark />).toJSON())
        .toMatchSnapshot()
    })
  })
})
