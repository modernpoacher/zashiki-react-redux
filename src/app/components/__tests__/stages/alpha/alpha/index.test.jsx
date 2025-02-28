import React from 'react'
import renderer from 'react-test-renderer'

import Alpha from '#zashiki-react-redux/app/components/stages/alpha/alpha'

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

const MOCK_RESOURCE = {
  alpha: 'MOCK ALPHA',
  omega: 'MOCK OMEGA'
}

const MOCK_RESPONSE = {
  '#/': 'MOCK VALUE'
}

const MOCK_ERRORS = []

const MOCK_DEFINITIONS = [
  {
    definition: MOCK_DEFINITION,
    resource: MOCK_RESOURCE,
    response: MOCK_RESPONSE,
    errors: MOCK_ERRORS
  }
]

describe('#zashiki-react-redux/app/components/stages/alpha/alpha', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Alpha
          definitions={MOCK_DEFINITIONS}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })
})
