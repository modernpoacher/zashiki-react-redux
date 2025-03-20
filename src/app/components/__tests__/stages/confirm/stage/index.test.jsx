import React from 'react'

import {
  toSnapshot
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Stage from '#zashiki-react-redux/app/components/stages/confirm/stage'

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

describe('#zashiki-react-redux/app/components/stages/confirm/stage', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(toSnapshot(render(
        <Stage
          definition={MOCK_DEFINITION}
          response={MOCK_RESPONSE}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
      )))
        .toMatchSnapshot()
    })
  })
})
