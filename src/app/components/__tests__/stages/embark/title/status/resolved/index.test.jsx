import React from 'react'

import {
  toSnapshot
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Resolved from '#zashiki-react-redux/app/components/stages/embark/title/status/resolved'

describe('#zashiki-react-redux/app/components/stages/embark/status/title/resolved', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(toSnapshot(render(
        <Resolved
          title='MOCK TITLE'
        />
      )))
        .toMatchSnapshot()
    })
  })
})
