import React from 'react'
import renderer from 'react-test-renderer'

import Pending from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/title/status/pending'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/title/status/pending', () => {
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
