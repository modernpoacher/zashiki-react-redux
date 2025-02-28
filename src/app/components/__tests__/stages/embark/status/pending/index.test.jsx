import React from 'react'
import renderer from 'react-test-renderer'

import Pending from '#zashiki-react-redux/app/components/stages/embark/status/pending'

describe('#zashiki-react-redux/app/components/stages/embark/status/pending', () => {
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
