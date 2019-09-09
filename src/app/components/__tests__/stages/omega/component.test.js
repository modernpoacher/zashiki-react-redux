import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {
  Signals
} from 'shinkansen-signals'

import Omega, { getErrorProps, getStageProps } from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/component'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('shinkansen-signals', () => ({
  Signals: {
    PENDING: 'MOCK PENDING',
    FAILURE: 'MOCK FAILURE',
    SUCCESS: 'MOCK SUCCESS',
    IN_PROGRESS: 'MOCK IN PROGRESS',
    NO_DECISION: 'MOCK NO DECISION',
    COMPLETE: 'MOCK COMPLETE'
  }
}))

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/component', () => {
  /**
   *  Inherited from `@modernpoacher/zashiki-react-redux/app/components/zashiki`
   */
  const MOCK_ONCHANGE = jest.fn()
  const MOCK_MATCH = { params: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' } }
  const MOCK_CHILDREN = []

  const mockProps = {
    state: {
      index: 'MOCK INDEX',
      count: 'MOCK COUNT'
    },
    definition: {},
    resource: {},
    gears: {
      forward: {
        alpha: 'MOCK ALPHA',
        omega: 'MOCK OMEGA'
      },
      reverse: {
        alpha: 'MOCK ALPHA',
        omega: 'MOCK OMEGA'
      }
    },
    onSubmit: jest.fn(),
    exception: {
      name: 'MOCK NAME',
      message: 'MOCK MESSAGE'
    }
  }

  it('renders', () => {
    const component = (
      <Omega
        status={Signals.PENDING}
        definition={{}}
        resource={{}}
        onSubmit={jest.fn()}
        onChange={MOCK_ONCHANGE}
        match={MOCK_MATCH}
        children={MOCK_CHILDREN}
      />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })

  describe('`getErrorProps`', () => {
    it('is defined', () => {
      expect(getErrorProps)
        .toBeDefined()
    })
  })

  describe('`getStageProps`', () => {
    it('is defined', () => {
      expect(getStageProps)
        .toBeDefined()
    })
  })

  describe('`Signals.PENDING`', () => {
    it('renders', () => {
      const component = (
        <Omega
          status={Signals.PENDING}
          definition={{}}
          resource={{}}
          onSubmit={jest.fn()}
          onChange={MOCK_ONCHANGE}
          match={MOCK_MATCH}
          children={MOCK_CHILDREN}
        />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`Signals.FAILURE`', () => {
    it('renders', () => {
      const component = (
        <Omega
          status={Signals.FAILURE}
          exception={{
            name: 'MOCK NAME',
            message: 'MOCK MESSAGE'
          }}
          onSubmit={jest.fn()}
          onChange={MOCK_ONCHANGE}
          match={MOCK_MATCH}
          children={MOCK_CHILDREN}
        />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`Signals.SUCCESS`', () => {
    it('renders', () => {
      const component = (
        <Omega
          status={Signals.SUCCESS}
          definition={{}}
          resource={{}}
          onSubmit={jest.fn()}
          onChange={MOCK_ONCHANGE}
          match={MOCK_MATCH}
          children={MOCK_CHILDREN}
        />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`Signals.IN_PROGRESS`', () => {
    it('renders', () => {
      const component = (
        <Omega
          status={Signals.IN_PROGRESS}
          definition={{}}
          resource={{}}
          onSubmit={jest.fn()}
          onChange={MOCK_ONCHANGE}
          match={MOCK_MATCH}
          children={MOCK_CHILDREN}
        />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`Signals.NO_DECISION`', () => {
    it('renders', () => {
      const component = (
        <Omega
          status={Signals.NO_DECISION}
          definition={{}}
          resource={{}}
          onSubmit={jest.fn()}
          onChange={MOCK_ONCHANGE}
          match={MOCK_MATCH}
          children={MOCK_CHILDREN}
        />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`Signals.COMPLETE`', () => {
    it('renders', () => {
      const component = (
        <Omega
          status={Signals.COMPLETE}
          definition={{}}
          resource={{}}
          onSubmit={jest.fn()}
          onChange={MOCK_ONCHANGE}
          match={MOCK_MATCH}
          children={MOCK_CHILDREN}
        />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`getErrorProps()`', () => {
    it('returns an object', () => {
      expect(getErrorProps(mockProps))
        .toEqual({
          name: 'MOCK NAME',
          message: 'MOCK MESSAGE'
        })
    })
  })

  describe('`getStageProps()`', () => {
    it('returns an object', () => {
      expect(getStageProps(mockProps))
        .toEqual({
          state: {
            index: 'MOCK INDEX',
            count: 'MOCK COUNT'
          },
          definition: {},
          resource: {},
          gears: {
            forward: {
              alpha: 'MOCK ALPHA',
              omega: 'MOCK OMEGA'
            },
            reverse: {
              alpha: 'MOCK ALPHA',
              omega: 'MOCK OMEGA'
            }
          },
          onSubmit: expect.any(Function)
        })
    })
  })
})
