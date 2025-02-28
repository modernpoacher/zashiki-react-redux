import React from 'react'
import renderer from 'react-test-renderer'

import Stage from '#zashiki-react-redux/app/components/stages/omega/title/stage'

describe('#zashiki-react-redux/app/components/stages/omega/title/stage', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Stage
          title='MOCK TITLE'
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })
})
