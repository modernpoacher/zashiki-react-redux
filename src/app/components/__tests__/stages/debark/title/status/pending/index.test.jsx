import React from 'react'
import renderer from 'react-test-renderer'

import Pending from '#app/components/stages/debark/title/status/pending'

describe('#app/components/stages/debark/title/status/pending', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Pending />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })
})
