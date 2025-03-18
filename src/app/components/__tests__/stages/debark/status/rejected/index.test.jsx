import React from 'react'
import snapshotOf, {
  getComponentElement
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Rejected from '#zashiki-react-redux/app/components/stages/debark/status/rejected'

describe('#zashiki-react-redux/app/components/stages/debark/status/rejected', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Rejected
          name='MOCK NAME'
          onSubmit={jest.fn()}
        />
      ))))
        .toMatchSnapshot()
    })
  })

  describe('`code` is an integer', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Rejected
          code={1}
          name='MOCK NAME'
          onSubmit={jest.fn()}
        />
      ))))
        .toMatchSnapshot()
    })
  })

  describe('`message` is a string', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Rejected
          name='MOCK NAME'
          message='MOCK MESSAGE'
          onSubmit={jest.fn()}
        />
      ))))
        .toMatchSnapshot()
    })
  })
})
