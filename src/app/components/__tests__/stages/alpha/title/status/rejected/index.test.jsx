import React from 'react'
import renderer from 'react-test-renderer'

import Rejected from '#app/components/stages/alpha/title/status/rejected'

describe('#app/components/stages/alpha/status/title/rejected', () => {
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
