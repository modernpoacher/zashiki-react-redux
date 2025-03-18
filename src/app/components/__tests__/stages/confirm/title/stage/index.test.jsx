import React from 'react'
import snapshotOf, {
  getComponentElement
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Stage from '#zashiki-react-redux/app/components/stages/confirm/title/stage'

describe('#zashiki-react-redux/app/components/stages/confirm/title/stage', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(snapshotOf(getComponentElement(render(
        <Stage
          title='MOCK TITLE'
        />
      ))))
        .toMatchSnapshot()
    })
  })
})
