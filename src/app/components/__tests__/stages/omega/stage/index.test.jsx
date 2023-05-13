import React from 'react'
import renderer from 'react-test-renderer'

import Stage from '#app/components/stages/omega/stage'

jest.mock('shinkansen-engine/components/signals', () => ({
  OMEGA_PATTERN: 'MOCK OMEGA PATTERN'
}))

const MOCK_DESCRIPTION = 'MOCK DESCRIPTION'

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

describe('#app/components/stages/omega/stage', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Stage
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
