import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Immutable from 'immutable'

import Zashiki, { resource } from '@modernpoacher/zashiki-react-redux/app/components/zashiki/component'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/zashiki/component', () => {
  const MOCK_ONCHANGE = jest.fn()
  const MOCK_MATCH = { params: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' } }
  const MOCK_CHILDREN = []

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Always', () => {
    const component = (
      <Zashiki
        onChange={MOCK_ONCHANGE}
        match={MOCK_MATCH}
        children={MOCK_CHILDREN}
      />
    )

    const spy = jest.spyOn(Zashiki.prototype, 'componentDidMount')

    let wrapper

    beforeEach(() => {
      wrapper = mount(component)
    })

    it('mounts', () => {
      expect(wrapper)
        .toBeDefined()
    })

    it('invokes `componentDidMount`', () => {
      expect(spy)
        .toHaveBeenCalled()
    })

    it('invokes `onChange`', () => {
      expect(MOCK_ONCHANGE)
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
      const mockProps = { match: MOCK_MATCH, onChange: MOCK_ONCHANGE }
      const mockState = { now: Immutable.Map({ alpha: 'MOCK ALPHA' }) }

      let state

      beforeEach(() => {
        state = Zashiki.getDerivedStateFromProps(mockProps, mockState)
      })

      it('returns the state', () => {
        expect(state)
          .toEqual({
            was: Immutable.Map({ alpha: 'MOCK ALPHA' }),
            now: Immutable.Map({ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
          })
      })

      it('invokes `onChange`', () => {
        expect(MOCK_ONCHANGE)
          .toBeCalledWith({ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
      })
    })

    describe('props have not changed', () => {
      const mockProps = { match: MOCK_MATCH, onChange: MOCK_ONCHANGE }
      const mockState = { now: Immutable.Map({ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }) }

      let state

      beforeEach(() => {
        state = Zashiki.getDerivedStateFromProps(mockProps, mockState)
      })

      it('returns the state', () => {
        expect(state)
          .toEqual({
            now: Immutable.Map({ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
          })
      })

      it('does not invoke `onChange`', () => {
        expect(MOCK_ONCHANGE)
          .not.toBeCalled()
      })
    })
  })
})
