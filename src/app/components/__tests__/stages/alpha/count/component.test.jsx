import React from 'react'
import renderer from 'react-test-renderer'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/count/component'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/count/component', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Count index={1} count={2} />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })
})
