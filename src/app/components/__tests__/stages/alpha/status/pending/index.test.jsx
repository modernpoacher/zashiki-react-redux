import React from 'react'

import {
  toSnapshot
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Pending from '#zashiki-react-redux/app/components/stages/alpha/status/pending'

describe('#zashiki-react-redux/app/components/stages/alpha/status/pending', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(toSnapshot(render(
        <Pending />
      )))
        .toMatchSnapshot()
    })
  })
})
