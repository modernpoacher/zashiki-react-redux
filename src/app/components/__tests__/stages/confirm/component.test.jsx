import React from 'react'
import renderer from 'react-test-renderer'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '@modernpoacher/zashiki-react-redux/app/common'

import Confirm from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/component'

jest.mock('@modernpoacher/zashiki-react-redux/app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/resolved', () => () => 'MOCK RESOLVED')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/rejected', () => () => 'MOCK REJECTED')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/pending', () => () => 'MOCK PENDING')

jest.mock('@modernpoacher/zashiki-react-redux/app/router/with-router', () => (Component) => Component)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/component', () => {
  const MOCK_DEFINITION = {
    meta: {},
    elements: {}
  }
  const MOCK_RESPONSE = {}
  const MOCK_ONSUBMIT = jest.fn()
  const MOCK_ONEMBARK = jest.fn()

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

    let rendered

    beforeEach(() => {
      rendered = renderer.create(component)
    })

    it('renders', () => {
      expect(rendered.toJSON())
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

      expect(renderer.create(component).toJSON())
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

      expect(renderer.create(component).toJSON())
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

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })
})
