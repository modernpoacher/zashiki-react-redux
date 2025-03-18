import React from 'react'
import snapshotOf, {
  getComponentElement
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Rejected from '#zashiki-react-redux/app/components/stages/embark/title/status/rejected'

describe('#zashiki-react-redux/app/components/stages/embark/status/title/rejected', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Rejected
          title='MOCK TITLE'
        />
      ))))
        .toMatchSnapshot()
    })
  })
})
