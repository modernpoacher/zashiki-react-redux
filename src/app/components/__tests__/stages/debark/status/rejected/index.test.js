import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Rejected from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/rejected'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/rejected', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Rejected
          name='MOCK NAME'
          onSubmit={jest.fn()}
        />
      )

      expect(toJson(shallow(component)))
        .toMatchSnapshot()
    })
  })

  describe('`code` is an integer', () => {
    it('renders', () => {
      const component = (
        <Rejected
          code={1}
          name='MOCK NAME'
          onSubmit={jest.fn()}
        />
      )

      expect(toJson(shallow(component)))
        .toMatchSnapshot()
    })
  })

  describe('`message` is a string', () => {
    it('renders', () => {
      const component = (
        <Rejected
          name='MOCK NAME'
          message='MOCK MESSAGE'
          onSubmit={jest.fn()}
        />
      )

      expect(toJson(shallow(component)))
        .toMatchSnapshot()
    })
  })
})
