import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/stage'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  OMEGA_PATTERN: 'MOCK OMEGA PATTERN'
}))

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/stage', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Stage
          description='MOCK DESCRIPTION'
          definition={{}}
          resource={{}}
          response={{}}
          errors={[]}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
      )

      expect(toJson(shallow(component)))
        .toMatchSnapshot()
    })
  })
})
