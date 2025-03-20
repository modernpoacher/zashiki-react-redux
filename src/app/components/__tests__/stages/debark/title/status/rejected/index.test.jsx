import React from 'react'

import {
  toSnapshot
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Rejected from '#zashiki-react-redux/app/components/stages/debark/title/status/rejected'

describe('#zashiki-react-redux/app/components/stages/debark/status/title/rejected', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(toSnapshot(render(
        <Rejected
          title='MOCK TITLE'
        />
      )))
        .toMatchSnapshot()
    })
  })
})
