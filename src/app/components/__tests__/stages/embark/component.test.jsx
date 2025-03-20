import React from 'react'
import PropTypes from 'prop-types'

import {
  toSnapshot
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

import Embark from '#zashiki-react-redux/app/components/stages/embark/component'

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

describe('#zashiki-react-redux/app/components/stages/embark/component', () => {
  const MOCK_DEFINITION = {
    meta: {
      uri: '#/'
    },
    elements: {
      title: 'MOCK TITLE',
      description: 'MOCK DESCRIPTION',
      field: {
        id: 'MOCK ID'
      }
    }
  }

  const MOCK_RESOURCE = {
    alpha: 'MOCK ALPHA',
    omega: 'MOCK OMEGA'
  }

  const MOCK_RESPONSE = {
    '#/': 'MOCK VALUE'
  }

  const MOCK_ERRORS = []
  const MOCK_ONCHANGE = jest.fn()
  const MOCK_ONSUBMIT = jest.fn()
  const MOCK_ONEMBARK = jest.fn()

  describe('Always', () => {
    let spy
    let component

    beforeEach(() => {
      spy = jest.spyOn(Embark.prototype, 'componentDidMount')
      component = render(
        <Embark
          status={RESOLVED}
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          response={MOCK_RESPONSE}
          errors={MOCK_ERRORS}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
        />
      )
    })

    describe('Always', () => {
      it('renders', () => {
        expect(toSnapshot(component))
          .toMatchSnapshot()
      })
    })

    it('invokes `componentDidMount`', () => {
      expect(spy)
        .toHaveBeenCalled()
    })

    it('invokes `onEmbark`', () => {
      expect(MOCK_ONEMBARK)
        .toHaveBeenCalled()
    })
  })

  describe('`RESOLVED`', () => {
    it('renders', () => {
      expect(toSnapshot(render(
        <Embark
          status={RESOLVED}
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          response={MOCK_RESPONSE}
          errors={MOCK_ERRORS}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
        />
      )))
        .toMatchSnapshot()
    })
  })

  describe('`REJECTED`', () => {
    it('renders', () => {
      expect(toSnapshot(render(
        <Embark
          status={REJECTED}
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          response={MOCK_RESPONSE}
          errors={MOCK_ERRORS}
          exception={{
            name: 'MOCK NAME',
            message: 'MOCK MESSAGE'
          }}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
        />
      )))
        .toMatchSnapshot()
    })
  })

  describe('`PENDING`', () => {
    it('renders', () => {
      expect(toSnapshot(render(
        <Embark
          status={PENDING}
          definition={MOCK_DEFINITION}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
        />
      )))
        .toMatchSnapshot()
    })
  })
})
