import React from 'react'
import renderer from 'react-test-renderer'

import Rejected from '#zashiki-react-redux/app/components/stages/omega/title/status/rejected'

describe('#zashiki-react-redux/app/components/stages/omega/status/title/rejected', () => {
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
