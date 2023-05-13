import React from 'react'
import renderer from 'react-test-renderer'

import Stage from '#app/components/stages/embark/title/stage'

describe('#app/components/stages/embark/title/stage', () => {
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
