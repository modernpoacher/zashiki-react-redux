import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/stage'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  ALPHA_PATTERN: 'MOCK ALPHA PATTERN'
}))

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/stage', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Stage definitions={[]} onChange={jest.fn()} onSubmit={jest.fn()} />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`state` is an object', () => {
    describe('`count` is an integer', () => {
      it('renders', () => {
        const component = (
          <Stage definitions={[]} onChange={jest.fn()} onSubmit={jest.fn()} state={{ count: 1, index: 0 }} />
        )

        expect(shallow(component))
          .toMatchSnapshot()
      })
    })

    describe('`index` is an integer', () => {
      it('renders', () => {
        const component = (
          <Stage definitions={[]} onChange={jest.fn()} onSubmit={jest.fn()} state={{ count: 0, index: 1 }} />
        )

        expect(shallow(component))
          .toMatchSnapshot()
      })
    })

    describe('`count` is an integer and `index` is an integer', () => {
      it('renders', () => {
        const component = (
          <Stage definitions={[]} onChange={jest.fn()} onSubmit={jest.fn()} state={{ count: 1, index: 1 }} />
        )

        expect(shallow(component))
          .toMatchSnapshot()
      })
    })
  })
})
