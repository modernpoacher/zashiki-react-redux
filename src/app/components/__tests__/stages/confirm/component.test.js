import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '@modernpoacher/zashiki-react-redux/app/common'

import Confirm, { getErrorProps, getConfirmProps } from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/component'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('@modernpoacher/zashiki-react-redux/app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/resolved')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/rejected')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/pending')

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/component', () => {
  const MOCK_DEFINITION = {
    meta: {},
    elements: {}
  }
  const MOCK_RESPONSE = {}
  const MOCK_ONSUBMIT = jest.fn()
  const MOCK_ONEMBARK = jest.fn()

  const mockProps = {
    definition: {},
    response: {},
    onSubmit: jest.fn(),
    onConfirm: jest.fn(),
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
      <Confirm
        status={RESOLVED}
        definition={MOCK_DEFINITION}
        response={MOCK_RESPONSE}
        onSubmit={MOCK_ONSUBMIT}
        onConfirm={MOCK_ONEMBARK}
      />
    )

    const spy = jest.spyOn(Confirm.prototype, 'componentDidMount')

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

    it('invokes `onConfirm`', () => {
      expect(MOCK_ONEMBARK)
        .toHaveBeenCalled()
    })
  })

  describe('`getConfirmProps`', () => {
    it('is defined', () => {
      expect(getConfirmProps)
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
        <Confirm
          status={RESOLVED}
          definition={MOCK_DEFINITION}
          response={MOCK_RESPONSE}
          onSubmit={MOCK_ONSUBMIT}
          onConfirm={MOCK_ONEMBARK}
        />
      )

      expect(toJson(shallow(component)))
        .toMatchSnapshot()
    })
  })

  describe('`REJECTED`', () => {
    it('renders', () => {
      const component = (
        <Confirm
          status={REJECTED}
          exception={{
            name: 'MOCK NAME',
            message: 'MOCK MESSAGE'
          }}
          response={MOCK_RESPONSE}
          onSubmit={MOCK_ONSUBMIT}
          onConfirm={MOCK_ONEMBARK}
        />
      )

      expect(toJson(shallow(component)))
        .toMatchSnapshot()
    })
  })

  describe('`PENDING`', () => {
    it('renders', () => {
      const component = (
        <Confirm
          status={PENDING}
          definition={MOCK_DEFINITION}
          response={MOCK_RESPONSE}
          onSubmit={MOCK_ONSUBMIT}
          onConfirm={MOCK_ONEMBARK}
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

  describe('`getConfirmProps()`', () => {
    it('returns an object', () => {
      expect(getConfirmProps(mockProps))
        .toEqual({
          definition: {},
          response: {},
          onSubmit: expect.any(Function)
        })
    })
  })
})
