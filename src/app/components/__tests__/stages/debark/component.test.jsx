import React from 'react'
import renderer from 'react-test-renderer'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '@modernpoacher/zashiki-react-redux/app/common'

import Debark from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/component'

jest.mock('@modernpoacher/zashiki-react-redux/app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/resolved', () => () => 'MOCK RESOLVED')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/rejected', () => () => 'MOCK REJECTED')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/pending', () => () => 'MOCK PENDING')

jest.mock('@modernpoacher/zashiki-react-redux/app/router/with-router', () => (Component) => Component)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/component', () => {
  const MOCK_DEFINITIONS = [
    {
      description: 'MOCK DESCRIPTION',
      definition: []
    }
  ]
  const MOCK_TOKEN = {}
  const MOCK_ONSUBMIT = jest.fn()
  const MOCK_ONDEBARK = jest.fn()

  describe('Always', () => {
    const component = (
      <Debark
        status={RESOLVED}
        definitions={MOCK_DEFINITIONS}
        token={MOCK_TOKEN}
        onSubmit={MOCK_ONSUBMIT}
        onDebark={MOCK_ONDEBARK}
      />
    )

    const spy = jest.spyOn(Debark.prototype, 'componentDidMount')

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

    it('invokes `onDebark`', () => {
      expect(MOCK_ONDEBARK)
        .toHaveBeenCalled()
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
})
