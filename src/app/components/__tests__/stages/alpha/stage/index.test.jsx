import React from 'react'
import renderer from 'react-test-renderer'

import Stage from '#zashiki-react-redux/app/components/stages/alpha/stage'

import MockGears from '#mocks/shinkansen-engine/components/gears'

jest.mock('shinkansen-engine/components/signals', () => ({
  ALPHA_PATTERN: 'MOCK ALPHA PATTERN'
}))

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

jest.mock('#zashiki-react-redux/app/components/stages/alpha/gears', () => (props) => <MockGears {...props} />)

describe('#zashiki-react-redux/app/components/stages/alpha/stage', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Stage
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
