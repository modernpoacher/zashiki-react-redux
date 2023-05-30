import React from 'react'
import renderer from 'react-test-renderer'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/stage'

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

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/stage', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Stage
          definition={MOCK_DEFINITION}
          response={MOCK_RESPONSE}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
      )

      expect(renderer.create(component))
        .toMatchSnapshot()
    })
  })
})
