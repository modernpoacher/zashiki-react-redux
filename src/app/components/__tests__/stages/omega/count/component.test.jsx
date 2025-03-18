import React from 'react'
import snapshotOf, {
  getComponentElement
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Count from '#zashiki-react-redux/app/components/stages/omega/count/component'

describe('#zashiki-react-redux/app/components/stages/omega/count/component', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Count
          index={1}
          count={2}
        />
      ))))
        .toMatchSnapshot()
    })
  })
})
