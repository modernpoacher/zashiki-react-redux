import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Failure from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/failure'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/failure', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Failure name={'MOCK NAME'} onSubmit={jest.fn()} />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`code` is an integer', () => {
    it('renders', () => {
      const component = (
        <Failure code={1} name={'MOCK NAME'} onSubmit={jest.fn()} />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`message` is a string', () => {
    it('renders', () => {
      const component = (
        <Failure name={'MOCK NAME'} message={'MOCK MESSAGE'} onSubmit={jest.fn()} />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })
})
