import React from 'react'
import renderer from 'react-test-renderer'

import Count from '#zashiki-react-redux/app/components/stages/omega/count/component'

describe('#zashiki-react-redux/app/components/stages/omega/count/component', () => {
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
