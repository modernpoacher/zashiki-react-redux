import React from 'react'
import snapshotOf, {
  getComponentElement
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

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
      expect(snapshotOf(getComponentElement(render(
        <Resolved
          definition={MOCK_DEFINITION}
          response={MOCK_RESPONSE}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
      ))))
        .toMatchSnapshot()
    })
  })
})
