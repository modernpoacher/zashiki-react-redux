import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '@modernpoacher/zashiki-react-redux/app/common'

import Alpha from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/component'

jest.mock('@modernpoacher/zashiki-react-redux/app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/components/zashiki/component', () => {
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

jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/status/resolved', () => () => 'MOCK RESOLVED')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/status/rejected', () => () => 'MOCK REJECTED')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/status/pending', () => () => 'MOCK PENDING')

jest.mock('react-redux', () => ({ connect () { return (Component) => Component } }))

jest.mock('@modernpoacher/zashiki-react-redux/app/router/with-router', () => (Component) => Component)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/component', () => {
  const MOCK_DEFINITION = {
    meta: {
      uri: '#/'
    },
    elements: {
      title: 'MOCK TITLE',
      field: {
        id: 'MOCK ID'
      }
    }
  }

  const MOCK_RESOURCE = {
    alpha: 'MOCK ALPHA',
    omega: 'MOCK OMEGA'
  }

  const MOCK_RESPONSE = {
    '#/': 'MOCK VALUE'
  }

  const MOCK_ERRORS = []

  const MOCK_DEFINITIONS = [
    {
      definition: MOCK_DEFINITION,
      resource: MOCK_RESOURCE,
      response: MOCK_RESPONSE,
      errors: MOCK_ERRORS
    }
  ]
  const MOCK_ONCHANGE = jest.fn()
  const MOCK_ONSUBMIT = jest.fn()

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
})
