import React from 'react'
import renderer from 'react-test-renderer'

import Rejected from '#app/components/stages/omega/title/status/rejected'

describe('#app/components/stages/omega/status/title/rejected', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Rejected
          title='MOCK TITLE'
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })
})
