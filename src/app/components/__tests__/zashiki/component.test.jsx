import React from 'react'
import renderer from 'react-test-renderer'

import Zashiki, { resource } from '#app/components/zashiki/component'
import equal from 'fast-deep-equal'

jest.mock('fast-deep-equal', () => jest.fn())

describe('#app/components/zashiki/component', () => {
  const MOCK_ONMOUNT = jest.fn()
  const MOCK_MATCH = { params: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' } }
  const MOCK_CHILDREN = []

  describe('Always', () => {
    const component = (
      <Zashiki
        onMount={MOCK_ONMOUNT}
        match={MOCK_MATCH}
        children={MOCK_CHILDREN} // eslint-disable-line react/no-children-prop
      />
    )

    const spy = jest.spyOn(Zashiki.prototype, 'componentDidMount')

    let rendered

    beforeEach(() => {
      rendered = renderer.create(component)
    })

    describe('Always', () => {
      it('renders', () => {
        expect(rendered.toJSON())
          .toMatchSnapshot()
      })
    })

    it('invokes `componentDidMount`', () => {
      expect(spy)
        .toHaveBeenCalled()
    })

    it('invokes `onMount`', () => {
      expect(MOCK_ONMOUNT)
        .toHaveBeenCalledWith({ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
    })
  })

  describe('`resource`', () => {
    it('is defined', () => {
      expect(resource)
        .toBeDefined()
    })
  })

  describe('`Zashiki.getDerivedStateFromProps`', () => {
    it('is defined', () => {
      expect(Zashiki.getDerivedStateFromProps)
        .toBeDefined()
    })
  })

  describe('`resource()`', () => {
    describe('`alpha` is a string', () => {
      expect(resource('MOCK ALPHA'))
        .toEqual({ alpha: 'MOCK ALPHA' })
    })

    describe('`alpha` is a string and `omega` is a string', () => {
      expect(resource('MOCK ALPHA', 'MOCK OMEGA'))
        .toEqual({ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
    })
  })

  describe('`Zashiki.getDerivedStateFromProps()`', () => {
    describe('props have changed', () => {
      const mockProps = { match: MOCK_MATCH, onMount: MOCK_ONMOUNT }
      const mockState = { now: { alpha: 'MOCK ALPHA' } }

      let state

      beforeEach(() => {
        equal.mockReturnValue(false)
        state = Zashiki.getDerivedStateFromProps(mockProps, mockState)
      })

      it('invokes `equal`', () => {
        expect(equal)
          .toBeCalledWith({ alpha: 'MOCK ALPHA' }, { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
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
          .toBeCalledWith({ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
      })
    })

    describe('props have not changed', () => {
      const mockProps = { match: MOCK_MATCH, onMount: MOCK_ONMOUNT }
      const mockState = { now: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' } }

      let state

      beforeEach(() => {
        equal.mockReturnValue(true)
        state = Zashiki.getDerivedStateFromProps(mockProps, mockState)
      })

      it('invokes `equal`', () => {
        expect(equal)
          .toBeCalledWith({ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }, { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
      })

      it('returns the state', () => {
        expect(state)
          .toEqual({
            now: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }
          })
      })

      it('does not invoke `onMount`', () => {
        expect(MOCK_ONMOUNT)
          .not.toBeCalled()
      })
    })
  })
})
