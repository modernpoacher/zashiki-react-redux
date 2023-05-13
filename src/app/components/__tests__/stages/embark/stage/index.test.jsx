import React from 'react'
import renderer from 'react-test-renderer'

import Stage from '#app/components/stages/embark/stage'

const MOCK_DEFINITION = {
  meta: {
    uri: '#/'
  },
  elements: {
    field: {
      id: '#/'
    }
  }
}

const MOCK_RESPONSE = {
  '#/': 'MOCK VALUE'
}

describe('#app/components/stages/embark/stage', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Stage
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
