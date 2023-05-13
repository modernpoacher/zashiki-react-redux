import React from 'react'
import renderer from 'react-test-renderer'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#app/common'

import Embark, { getEmbarkProps, getErrorProps } from '#app/components/stages/embark/component'

jest.mock('#app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('#app/components/stages/embark/status/resolved', () => () => 'MOCK RESOLVED')
jest.mock('#app/components/stages/embark/status/rejected', () => () => 'MOCK REJECTED')
jest.mock('#app/components/stages/embark/status/pending', () => () => 'MOCK PENDING')

describe('#app/components/stages/embark/component', () => {
  const MOCK_DEFINITION = {
    meta: {},
    elements: {}
  }
  const MOCK_RESOURCE = {}
  const MOCK_ONCHANGE = jest.fn()
  const MOCK_ONSUBMIT = jest.fn()
  const MOCK_ONEMBARK = jest.fn()

  const mockProps = {
    definition: {},
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    exception: {
      name: 'MOCK NAME',
      message: 'MOCK MESSAGE'
    }
  }

  describe('Always', () => {
    const component = (
      <Embark
        status={RESOLVED}
        definition={MOCK_DEFINITION}
        resource={MOCK_RESOURCE}
        onChange={MOCK_ONCHANGE}
        onSubmit={MOCK_ONSUBMIT}
        onEmbark={MOCK_ONEMBARK}
      />
    )

    const spy = jest.spyOn(Embark.prototype, 'componentDidMount')

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

    it('invokes `onEmbark`', () => {
      expect(MOCK_ONEMBARK)
        .toHaveBeenCalled()
    })
  })

  describe('`getEmbarkProps`', () => {
    it('is defined', () => {
      expect(getEmbarkProps)
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
        <Embark
          status={RESOLVED}
          definition={MOCK_DEFINITION}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`REJECTED`', () => {
    it('renders', () => {
      const component = (
        <Embark
          status={REJECTED}
          exception={{
            name: 'MOCK NAME',
            message: 'MOCK MESSAGE'
          }}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`PENDING`', () => {
    it('renders', () => {
      const component = (
        <Embark
          status={PENDING}
          definition={MOCK_DEFINITION}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
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

  describe('`getEmbarkProps()`', () => {
    it('returns an object', () => {
      expect(getEmbarkProps(mockProps))
        .toEqual({
          definition: {},
          onChange: expect.any(Function),
          onSubmit: expect.any(Function)
        })
    })
  })
})
