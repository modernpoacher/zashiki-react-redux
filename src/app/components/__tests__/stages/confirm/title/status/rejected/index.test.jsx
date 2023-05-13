import React from 'react'
import renderer from 'react-test-renderer'

import Rejected from '#app/components/stages/confirm/title/status/rejected'

describe('#app/components/stages/confirm/status/title/rejected', () => {
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
