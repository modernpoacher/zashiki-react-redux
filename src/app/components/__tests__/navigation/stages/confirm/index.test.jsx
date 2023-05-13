import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'

import Confirm from '#app/components/navigation/stages/confirm'

import getConfirmRoute from '#app/common/get-confirm-route'

jest.mock('#app/common/get-confirm-route')

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

describe('#app/components/navigation/stages/confirm', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(renderer.create(<Confirm />).toJSON())
        .toMatchSnapshot()
    })
  })

  it('invokes `getConfirmRoute`', () => {
    expect(getConfirmRoute)
      .toBeCalled()
  })
})