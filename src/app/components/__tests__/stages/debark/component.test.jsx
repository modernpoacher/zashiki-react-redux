import React from 'react'
import PropTypes from 'prop-types'
import snapshotOf, {
  getComponentElement
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#zashiki-react-redux/app/common'

import Debark from '#zashiki-react-redux/app/components/stages/debark/component'

jest.mock('#zashiki-react-redux/app/common', () => {
  return {
    RESOLVED: 'MOCK RESOLVED',
    REJECTED: 'MOCK REJECTED',
    PENDING: 'MOCK PENDING'
  }
})

jest.mock('#zashiki-react-redux/app/router/with-router', () => (Component) => Component)

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

describe('#zashiki-react-redux/app/components/stages/debark/component', () => {
  const MOCK_DEFINITIONS = [
    {
      description: 'MOCK DESCRIPTION',
      definition: []
    }
  ]
  const MOCK_TOKEN = {}
  const MOCK_ONSUBMIT = jest.fn()
  const MOCK_ONDEBARK = jest.fn()

  describe('Always', () => {
    let spy
    let component

    beforeEach(() => {
      spy = jest.spyOn(Debark.prototype, 'componentDidMount')
      component = render(
        <Debark
          status={RESOLVED}
          definitions={MOCK_DEFINITIONS}
          token={MOCK_TOKEN}
          onSubmit={MOCK_ONSUBMIT}
          onDebark={MOCK_ONDEBARK}
        />
      )
    })

    it('renders', () => {
      expect(snapshotOf(getComponentElement(component)))
        .toMatchSnapshot()
    })

    it('invokes `componentDidMount`', () => {
      expect(spy)
        .toHaveBeenCalled()
    })

    it('invokes `onDebark`', () => {
      expect(MOCK_ONDEBARK)
        .toHaveBeenCalled()
    })
  })

  describe('`RESOLVED`', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Debark
          status={RESOLVED}
          definitions={MOCK_DEFINITIONS}
          token={MOCK_TOKEN}
          onSubmit={MOCK_ONSUBMIT}
          onDebark={MOCK_ONDEBARK}
        />
      ))))
        .toMatchSnapshot()
    })
  })

  describe('`REJECTED`', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Debark
          status={REJECTED}
          exception={{
            name: 'MOCK NAME',
            message: 'MOCK MESSAGE'
          }}
          token={MOCK_TOKEN}
          onSubmit={MOCK_ONSUBMIT}
          onDebark={MOCK_ONDEBARK}
        />
      ))))
        .toMatchSnapshot()
    })
  })

  describe('`PENDING`', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Debark
          status={PENDING}
          definitions={MOCK_DEFINITIONS}
          token={MOCK_TOKEN}
          onSubmit={MOCK_ONSUBMIT}
          onDebark={MOCK_ONDEBARK}
        />
      ))))
        .toMatchSnapshot()
    })
  })
})
