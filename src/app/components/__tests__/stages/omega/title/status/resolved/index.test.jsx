import React from 'react'
import renderer from 'react-test-renderer'

import Resolved from '#zashiki-react-redux/app/components/stages/omega/title/status/resolved'

describe('#zashiki-react-redux/app/components/stages/omega/status/title/resolved', () => {
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
