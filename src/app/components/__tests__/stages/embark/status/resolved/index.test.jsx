
import React from 'react'
import renderer from 'react-test-renderer'

import Resolved from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/resolved'

const MOCK_DEFINITION = {
  meta: {
    uri: '#/'
  },
  elements: {
    title: 'MOCK TITLE',
    field: {
      id: 'MOCK ID'
    }
  }
}

const MOCK_RESPONSE = {
  '#/': 'MOCK VALUE'
}

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/resolved', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Resolved
          definition={MOCK_DEFINITION}
          response={MOCK_RESPONSE}
          errors={[]}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })
})
