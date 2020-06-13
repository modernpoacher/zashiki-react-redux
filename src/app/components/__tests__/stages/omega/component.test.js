import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Signals from 'shinkansen-engine/lib/components/signals'

import Omega, { getErrorProps, getStageProps } from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/component'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  PENDING: 'MOCK PENDING',
  FAILURE: 'MOCK FAILURE',
  SUCCESS: 'MOCK SUCCESS',
  IN_PROGRESS: 'MOCK IN PROGRESS',
  NO_DECISION: 'MOCK NO DECISION',
  COMPLETE: 'MOCK COMPLETE'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/components/zashiki/component')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/complete')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/failure')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/success')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/in-progress')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/no-decision')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/pending')

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/component', () => {
  const MOCK_DEFINITION = {}
  const MOCK_RESOURCE = {}
  const MOCK_ONCHANGE = jest.fn()
  const MOCK_ONSUBMIT = jest.fn()

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
    onChange: jest.fn(),
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
        definition={MOCK_DEFINITION}
        resource={MOCK_RESOURCE}
        onChange={MOCK_ONCHANGE}
        onSubmit={MOCK_ONSUBMIT}
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
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
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
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
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
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
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
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
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
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
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
          definition={MOCK_DEFINITION}
          resource={MOCK_RESOURCE}
          onChange={MOCK_ONCHANGE}
          onSubmit={MOCK_ONSUBMIT}
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
          onChange: expect.any(Function),
          onSubmit: expect.any(Function)
        })
    })
  })
})
