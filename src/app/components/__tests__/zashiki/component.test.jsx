import React from 'react'

import {
  toSnapshot
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Zashiki from '#zashiki-react-redux/app/components/zashiki/component'
import equal from 'fast-deep-equal'

jest.mock('fast-deep-equal', () => jest.fn())

describe('#zashiki-react-redux/app/components/zashiki/component', () => {
  const MOCK_ONMOUNT = jest.fn()
  const MOCK_MATCH = { params: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' } }
  const MOCK_CHILDREN = []

  describe('Always', () => {
    let spy
    let component

    beforeEach(() => {
      spy = jest.spyOn(Zashiki.prototype, 'componentDidMount')
      component = render(
        <Zashiki
          onMount={MOCK_ONMOUNT}
          router={MOCK_MATCH}
          children={MOCK_CHILDREN} // eslint-disable-line react/no-children-prop
        />
      )
    })

    it('renders', () => {
      expect(toSnapshot(component))
        .toMatchSnapshot()
    })

    xit('invokes `componentDidMount`', () => {
      expect(spy)
        .toHaveBeenCalled()
    })

    xit('invokes `onMount`', () => {
      expect(MOCK_ONMOUNT)
        .toHaveBeenCalledWith({ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
    })
  })

  describe('`Zashiki.getDerivedStateFromProps`', () => {
    it('is defined', () => {
      expect(Zashiki.getDerivedStateFromProps)
        .toBeDefined()
    })
  })

  describe('`Zashiki.getDerivedStateFromProps()`', () => {
    describe('props have changed', () => {
      const mockProps = { router: MOCK_MATCH, onMount: MOCK_ONMOUNT }
      const mockState = { now: { alpha: 'MOCK ALPHA' } }

      let state

      beforeEach(() => {
        equal.mockReturnValue(false)
        state = Zashiki.getDerivedStateFromProps(mockProps, mockState)
      })

      it('invokes `equal`', () => {
        expect(equal)
          .toHaveBeenCalledWith({ alpha: 'MOCK ALPHA' }, { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
      })

      it('returns the state', () => {
        expect(state)
          .toEqual({
            was: { alpha: 'MOCK ALPHA' },
            now: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }
          })
      })

      it('invokes `onMount`', () => {
        expect(MOCK_ONMOUNT)
          .toHaveBeenCalledWith({ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
      })
    })

    describe('props have not changed', () => {
      const mockProps = { router: MOCK_MATCH, onMount: MOCK_ONMOUNT }
      const mockState = { now: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' } }

      let state

      beforeEach(() => {
        equal.mockReturnValue(true)
        state = Zashiki.getDerivedStateFromProps(mockProps, mockState)
      })

      it('invokes `equal`', () => {
        expect(equal)
          .toHaveBeenCalledWith({ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }, { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
      })

      it('returns the state', () => {
        expect(state)
          .toEqual({
            now: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }
          })
      })

      it('does not invoke `onMount`', () => {
        expect(MOCK_ONMOUNT)
          .not.toHaveBeenCalled()
      })
    })
  })
})
