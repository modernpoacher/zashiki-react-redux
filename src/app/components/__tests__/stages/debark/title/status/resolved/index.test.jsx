import React from 'react'
import renderer from 'react-test-renderer'

import Resolved from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/title/status/resolved'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/title/resolved', () => {
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
