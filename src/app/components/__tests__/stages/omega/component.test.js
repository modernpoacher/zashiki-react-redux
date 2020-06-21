import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '@modernpoacher/zashiki-react-redux/app/common'

import Omega, { getStageProps, getErrorProps } from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/component'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('@modernpoacher/zashiki-react-redux/app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/components/zashiki/component')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/resolved')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/rejected')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/pending')

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/component', () => {
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

    expect(toJson(shallow(component)))
      .toMatchSnapshot()
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

      expect(toJson(shallow(component)))
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

      expect(toJson(shallow(component)))
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

      expect(toJson(shallow(component)))
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
