import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#app/common'

import Alpha, { getStageProps, getErrorProps } from '#app/components/stages/alpha/component'

jest.mock('#app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('#app/components/zashiki/component', () => {
  class MockZashiki extends mockComponent {
    state = {}

    static getDerivedStateFromProps () {
      return {}
    }

    componentDidMount () { }
  }

  return {
    __esModule: true,
    default: MockZashiki
  }
})

jest.mock('#app/components/stages/alpha/status/resolved', () => () => 'MOCK RESOLVED')
jest.mock('#app/components/stages/alpha/status/rejected', () => () => 'MOCK REJECTED')
jest.mock('#app/components/stages/alpha/status/pending', () => () => 'MOCK PENDING')

describe('#app/components/stages/alpha/component', () => {
  const MOCK_DEFINITIONS = []
  const MOCK_ONCHANGE = jest.fn()
  const MOCK_ONSUBMIT = jest.fn()

  const mockProps = {
    definitions: [],
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    exception: {
      name: 'MOCK NAME',
      message: 'MOCK MESSAGE'
    }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Alpha
          status={RESOLVED}
          definitions={MOCK_DEFINITIONS}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`getStageProps`', () => {
    it('is defined', () => {
      expect(getStageProps)
        .toBeDefined()
    })
  })

  describe('`getErrorProps`', () => {
    it('is defined', () => {
      expect(getErrorProps)
        .toBeDefined()
    })
  })

  describe('`RESOLVED`', () => {
    it('renders', () => {
      const component = (
        <Alpha
          status={RESOLVED}
          definitions={MOCK_DEFINITIONS}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`REJECTED`', () => {
    it('renders', () => {
      const component = (
        <Alpha
          status={REJECTED}
          exception={{
            name: 'MOCK NAME',
            message: 'MOCK MESSAGE'
          }}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`PENDING`', () => {
    it('renders', () => {
      const component = (
        <Alpha
          status={PENDING}
          definitions={MOCK_DEFINITIONS}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`getErrorProps()`', () => {
    it('returns an object', () => {
      expect(getErrorProps(mockProps))
        .toEqual({
          name: 'MOCK NAME',
          message: 'MOCK MESSAGE'
        })
    })
  })

  describe('`getStageProps()`', () => {
    it('returns an object', () => {
      expect(getStageProps(mockProps))
        .toEqual({
          definitions: [],
          onChange: expect.any(Function),
          onSubmit: expect.any(Function)
        })
    })
  })
})
