import React from 'react'
import snapshotOf, {
  getComponentElement
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Pending from '#zashiki-react-redux/app/components/stages/embark/title/status/pending'

describe('#zashiki-react-redux/app/components/stages/embark/title/status/pending', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Pending />
      ))))
        .toMatchSnapshot()
    })
  })
})
