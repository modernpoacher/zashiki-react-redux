import React from 'react'
import renderer from 'react-test-renderer'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/title/stage'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/title/stage', () => {
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
