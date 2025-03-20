import React from 'react'
import PropTypes from 'prop-types'

import {
  toSnapshot
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Stage from '#zashiki-react-redux/app/components/stages/embark/stage'

const MOCK_DEFINITION = {
  meta: {
    uri: '#/'
  },
  elements: {
    field: {
      id: '#/'
    }
  }
}

const MOCK_RESPONSE = {
  '#/': 'MOCK VALUE'
}

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

describe('#zashiki-react-redux/app/components/stages/embark/stage', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(toSnapshot(render(
        <Stage
          definition={MOCK_DEFINITION}
          response={MOCK_RESPONSE}
          errors={[]}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
      )))
        .toMatchSnapshot()
    })
  })
})
