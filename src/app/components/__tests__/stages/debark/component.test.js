import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '@modernpoacher/zashiki-react-redux/app/common'

import Debark, { getDebarkProps, getErrorProps } from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/component'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('@modernpoacher/zashiki-react-redux/app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/resolved')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/rejected')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/pending')

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/component', () => {
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

    let wrapper

    beforeEach(() => {
      wrapper = shallow(component)
    })

    it('renders', () => {
      expect(wrapper)
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

      expect(toJson(shallow(component)))
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

      expect(toJson(shallow(component)))
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
