import React from 'react'
import renderer from 'react-test-renderer'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#zashiki-react-redux/app/common'

import Embark from '#zashiki-react-redux/app/components/stages/embark/component'

jest.mock('#zashiki-react-redux/app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('#zashiki-react-redux/app/components/stages/embark/status/resolved', () => () => 'MOCK RESOLVED')
jest.mock('#zashiki-react-redux/app/components/stages/embark/status/rejected', () => () => 'MOCK REJECTED')
jest.mock('#zashiki-react-redux/app/components/stages/embark/status/pending', () => () => 'MOCK PENDING')

jest.mock('#zashiki-react-redux/app/router/with-router', () => (Component) => Component)

describe('#zashiki-react-redux/app/components/stages/embark/component', () => {
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
  const MOCK_ONCHANGE = jest.fn()
  const MOCK_ONSUBMIT = jest.fn()
  const MOCK_ONEMBARK = jest.fn()

  describe('Always', () => {
    const component = (
      <Embark
        status={RESOLVED}
        definition={MOCK_DEFINITION}
        resource={MOCK_RESOURCE}
        response={MOCK_RESPONSE}
        errors={MOCK_ERRORS}
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

  describe('`RESOLVED`', () => {
    it('renders', () => {
      const component = (
        <Embark
          status={RESOLVED}
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          response={MOCK_RESPONSE}
          errors={MOCK_ERRORS}
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
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          response={MOCK_RESPONSE}
          errors={MOCK_ERRORS}
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
})
