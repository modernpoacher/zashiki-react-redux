import React from 'react'
import renderer from 'react-test-renderer'

import Rejected from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/rejected'

const MOCK_RESPONSE = {
  '#/': 'MOCK VALUE'
}

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/rejected', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Rejected
          name='MOCK NAME'
          response={MOCK_RESPONSE}
          onSubmit={jest.fn()}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`code` is an integer', () => {
    it('renders', () => {
      const component = (
        <Rejected
          code={1}
          name='MOCK NAME'
          response={MOCK_RESPONSE}
          onSubmit={jest.fn()}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`message` is a string', () => {
    it('renders', () => {
      const component = (
        <Rejected
          name='MOCK NAME'
          message='MOCK MESSAGE'
          response={MOCK_RESPONSE}
          onSubmit={jest.fn()}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })
})
