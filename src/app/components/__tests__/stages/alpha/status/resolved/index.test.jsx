import React from 'react'
import PropTypes from 'prop-types'

import {
  toSnapshot
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Resolved from '#zashiki-react-redux/app/components/stages/alpha/status/resolved'

jest.mock('react-redux', () => {
  return {
    connect () {
      return (Component) => Component
    }
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

describe('#zashiki-react-redux/app/components/stages/alpha/status/resolved', () => {
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

  const MOCK_DEFINITIONS = [
    {
      definition: MOCK_DEFINITION,
      resource: MOCK_RESOURCE,
      response: MOCK_RESPONSE,
      errors: MOCK_ERRORS
    }
  ]

  describe('Always', () => {
    it('renders', () => {
      expect(toSnapshot(render(
        <Resolved
          definitions={MOCK_DEFINITIONS}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
      )))
        .toMatchSnapshot()
    })
  })
})
