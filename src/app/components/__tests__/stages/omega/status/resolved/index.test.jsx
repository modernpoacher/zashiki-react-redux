import React from 'react'
import renderer from 'react-test-renderer'

import MockGears from '#mocks/shinkansen-engine/components/gears'

import Resolved from '#zashiki-react-redux/app/components/stages/omega/status/resolved'

const MOCK_DESCRIPTION = 'MOCK DESCRIPTION'

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

jest.mock('#zashiki-react-redux/app/components/stages/omega/gears', () => (props) => <MockGears {...props} />)

describe('#zashiki-react-redux/app/components/stages/omega/status/resolved', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Resolved
          description={MOCK_DESCRIPTION}
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          response={MOCK_RESPONSE}
          errors={MOCK_ERRORS}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })
})
