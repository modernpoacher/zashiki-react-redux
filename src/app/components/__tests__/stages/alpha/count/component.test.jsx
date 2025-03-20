import React from 'react'

import {
  toSnapshot
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Count from '#zashiki-react-redux/app/components/stages/alpha/count/component'

describe('#zashiki-react-redux/app/components/stages/alpha/count/component', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(toSnapshot(render(
        <Count
          index={1}
          count={2}
        />
      )))
        .toMatchSnapshot()
    })
  })
})
