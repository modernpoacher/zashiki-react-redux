import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#zashiki-react-redux/app/common'

import Omega from '#zashiki-react-redux/app/components/stages/omega/component'

jest.mock('#zashiki-react-redux/app/common', () => {
  return {
    RESOLVED: 'MOCK RESOLVED',
    REJECTED: 'MOCK REJECTED',
    PENDING: 'MOCK PENDING'
  }
})

jest.mock('#zashiki-react-redux/app/common/get-resource-route', () => () => 'MOCK RESOURCE ROUTE')

jest.mock('#zashiki-react-redux/app/components/zashiki/component', () => {
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

jest.mock('#zashiki-react-redux/app/components/stages/omega/status/resolved', () => () => 'MOCK RESOLVED')
jest.mock('#zashiki-react-redux/app/components/stages/omega/status/rejected', () => () => 'MOCK REJECTED')
jest.mock('#zashiki-react-redux/app/components/stages/omega/status/pending', () => () => 'MOCK PENDING')

jest.mock('react-redux', () => ({ connect () { return (Component) => Component } }))

jest.mock('#zashiki-react-redux/app/router/with-router', () => (Component) => Component)

describe('#zashiki-react-redux/app/components/stages/omega/component', () => {
  const MOCK_DEFINITION = {
    meta: {
      uri: '#/'
    },
    elements: {
      title: 'MOCK TITLE',
      description: 'MOCK DESCRIPTION',
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
  const MOCK_ONCHANGE = jest.fn()
  const MOCK_ONSUBMIT = jest.fn()

  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Omega
          status={RESOLVED}
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          response={MOCK_RESPONSE}
          errors={MOCK_ERRORS}
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
        <Omega
          status={RESOLVED}
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          response={MOCK_RESPONSE}
          errors={MOCK_ERRORS}
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
})
