import React from 'react'
import renderer from 'react-test-renderer'

import Resolved from '#zashiki-react-redux/app/components/stages/confirm/status/resolved'

const MOCK_DEFINITION = {
  meta: {
    uri: '#/'
  },
  elements: {
    title: 'MOCK TITLE',
    description: 'MOCK DESCRIPTION',
    field: {
      id: 'MOCK ID'
    }
  }
}

const MOCK_RESPONSE = {
  '#/': 'MOCK VALUE'
}

describe('#zashiki-react-redux/app/components/stages/confirm/status/resolved', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Resolved
          definition={MOCK_DEFINITION}
          response={MOCK_RESPONSE}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })
})
