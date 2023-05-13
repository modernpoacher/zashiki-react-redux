import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#app/common'

import Omega, { getStageProps, getErrorProps } from '#app/components/stages/omega/component'

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

jest.mock('#app/components/stages/omega/status/resolved', () => () => 'MOCK RESOLVED')
jest.mock('#app/components/stages/omega/status/rejected', () => () => 'MOCK REJECTED')
jest.mock('#app/components/stages/omega/status/pending', () => () => 'MOCK PENDING')

describe('#app/components/stages/omega/component', () => {
  const MOCK_DEFINITION = {}
  const MOCK_RESOURCE = {}
  const MOCK_ONCHANGE = jest.fn()
  const MOCK_ONSUBMIT = jest.fn()

  const mockProps = {
    definition: {},
    resource: {},
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    exception: {
      name: 'MOCK NAME',
      message: 'MOCK MESSAGE'
    }
  }

  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Omega
          status={RESOLVED}
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
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
        <Omega
          status={RESOLVED}
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
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
        <Omega
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
        <Omega
          status={PENDING}
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
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
          definition: {},
          resource: {},
          onChange: expect.any(Function),
          onSubmit: expect.any(Function)
        })
    })
  })
})
