import React from 'react'
import snapshotOf, {
  getComponentElement
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#zashiki-react-redux/app/common'

import Confirm from '#zashiki-react-redux/app/components/stages/confirm/component'

jest.mock('#zashiki-react-redux/app/common', () => {
  return {
    RESOLVED: 'MOCK RESOLVED',
    REJECTED: 'MOCK REJECTED',
    PENDING: 'MOCK PENDING'
  }
})

jest.mock('#zashiki-react-redux/app/router/with-router', () => (Component) => Component)

describe('#zashiki-react-redux/app/components/stages/confirm/component', () => {
  const MOCK_DEFINITION = {
    meta: {},
    elements: {}
  }
  const MOCK_RESPONSE = {}
  const MOCK_ONSUBMIT = jest.fn()
  const MOCK_ONEMBARK = jest.fn()

  describe('Always', () => {
    let spy
    let component

    beforeEach(() => {
      spy = jest.spyOn(Confirm.prototype, 'componentDidMount')
      component = render(
        <Confirm
          status={RESOLVED}
          definition={MOCK_DEFINITION}
          response={MOCK_RESPONSE}
          onSubmit={MOCK_ONSUBMIT}
          onConfirm={MOCK_ONEMBARK}
        />
      )
    })

    it('renders', () => {
      expect(snapshotOf(getComponentElement(component)))
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
      expect(snapshotOf(getComponentElement(render(
        <Confirm
          status={RESOLVED}
          definition={MOCK_DEFINITION}
          response={MOCK_RESPONSE}
          onSubmit={MOCK_ONSUBMIT}
          onConfirm={MOCK_ONEMBARK}
        />
      ))))
        .toMatchSnapshot()
    })
  })

  describe('`REJECTED`', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
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
      ))))
        .toMatchSnapshot()
    })
  })

  describe('`PENDING`', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Confirm
          status={PENDING}
          definition={MOCK_DEFINITION}
          response={MOCK_RESPONSE}
          onSubmit={MOCK_ONSUBMIT}
          onConfirm={MOCK_ONEMBARK}
        />
      ))))
        .toMatchSnapshot()
    })
  })
})
