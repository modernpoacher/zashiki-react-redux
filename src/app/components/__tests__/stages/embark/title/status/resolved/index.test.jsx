import React from 'react'
import renderer from 'react-test-renderer'

import Resolved from '#app/components/stages/embark/title/status/resolved'

describe('#app/components/stages/embark/status/title/resolved', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Resolved
          title='MOCK TITLE'
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })
})
