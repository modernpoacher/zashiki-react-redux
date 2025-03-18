import React from 'react'
import PropTypes from 'prop-types'
import snapshotOf, {
  getComponentElement
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Stage from '#zashiki-react-redux/app/components/stages/omega/stage'

jest.mock('shinkansen-engine/components/signals', () => ({
  OMEGA_PATTERN: 'MOCK OMEGA PATTERN'
}))

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

describe('#zashiki-react-redux/app/components/stages/omega/stage', () => {
  const MOCK_DESCRIPTION = 'MOCK DESCRIPTION'

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

  describe('Always', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Stage
          description={MOCK_DESCRIPTION}
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          response={MOCK_RESPONSE}
          errors={MOCK_ERRORS}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
      ))))
        .toMatchSnapshot()
    })
  })
})
