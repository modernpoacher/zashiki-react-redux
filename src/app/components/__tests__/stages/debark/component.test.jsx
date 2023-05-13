import React from 'react'
import renderer from 'react-test-renderer'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#app/common'

import Debark, { getDebarkProps, getErrorProps } from '#app/components/stages/debark/component'

jest.mock('#app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('#app/components/stages/debark/status/resolved', () => () => 'MOCK RESOLVED')
jest.mock('#app/components/stages/debark/status/rejected', () => () => 'MOCK REJECTED')
jest.mock('#app/components/stages/debark/status/pending', () => () => 'MOCK PENDING')

describe('#app/components/stages/debark/component', () => {
  const MOCK_DEFINITIONS = []
  const MOCK_TOKEN = {}
  const MOCK_RESOURCE = {}
  const MOCK_ONSUBMIT = jest.fn()
  const MOCK_ONDEBARK = jest.fn()

  const mockProps = {
    definitions: [],
    token: {},
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
    const component = (
      <Debark
        status={RESOLVED}
        definitions={MOCK_DEFINITIONS}
        token={MOCK_TOKEN}
        resource={MOCK_RESOURCE}
        onSubmit={MOCK_ONSUBMIT}
        onDebark={MOCK_ONDEBARK}
      />
    )

    const spy = jest.spyOn(Debark.prototype, 'componentDidMount')

    let rendered

    beforeEach(() => {
      rendered = renderer.create(component)
    })

    describe('Always', () => {
      it('renders', () => {
        expect(rendered.toJSON())
          .toMatchSnapshot()
      })
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

  describe('`getDebarkProps`', () => {
    it('is defined', () => {
      expect(getDebarkProps)
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
        <Debark
          status={RESOLVED}
          definitions={MOCK_DEFINITIONS}
          token={MOCK_TOKEN}
          onSubmit={MOCK_ONSUBMIT}
          onDebark={MOCK_ONDEBARK}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`REJECTED`', () => {
    it('renders', () => {
      const component = (
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
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`PENDING`', () => {
    it('renders', () => {
      const component = (
        <Debark
          status={PENDING}
          definitions={MOCK_DEFINITIONS}
          token={MOCK_TOKEN}
          onSubmit={MOCK_ONSUBMIT}
          onDebark={MOCK_ONDEBARK}
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

  describe('`getDebarkProps()`', () => {
    it('returns an object', () => {
      expect(getDebarkProps(mockProps))
        .toEqual({
          definitions: [],
          token: {},
          onSubmit: expect.any(Function)
        })
    })
  })
})
