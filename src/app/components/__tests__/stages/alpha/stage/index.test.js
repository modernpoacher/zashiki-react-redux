import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
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
        <Stage
          definitions={[]}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
      )

      expect(toJson(shallow(component)))
        .toMatchSnapshot()
    })
  })
})
