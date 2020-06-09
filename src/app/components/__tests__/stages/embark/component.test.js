import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Signals from 'shinkansen-engine/lib/components/signals'

import Embark, { getErrorProps, getEmbarkProps } from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/component'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  PENDING: 'MOCK PENDING',
  FAILURE: 'MOCK FAILURE',
  SUCCESS: 'MOCK SUCCESS',
  IN_PROGRESS: 'MOCK IN PROGRESS',
  NO_DECISION: 'MOCK NO DECISION',
  COMPLETE: 'MOCK COMPLETE'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/complete')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/failure')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/success')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/in-progress')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/no-decision')
jest.mock('@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/pending')

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/component', () => {
  const MOCK_DEFINITION = {
    meta: {},
    elements: {}
  }
  const MOCK_RESOURCE = {}
  const MOCK_ONSUBMIT = jest.fn()
  const MOCK_ONEMBARK = jest.fn()

  const mockProps = {
    definition: {},
    onSubmit: jest.fn(),
    exception: {
      name: 'MOCK NAME',
      message: 'MOCK MESSAGE'
    }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Always', () => {
    const component = (
      <Embark
        status={Signals.PENDING}
        definition={MOCK_DEFINITION}
        resource={MOCK_RESOURCE}
        onSubmit={MOCK_ONSUBMIT}
        onEmbark={MOCK_ONEMBARK}
      />
    )

    const spy = jest.spyOn(Embark.prototype, 'componentDidMount')

    let wrapper

    beforeEach(() => {
      wrapper = shallow(component)
    })

    it('renders', () => {
      expect(wrapper)
        .toMatchSnapshot()
    })

    it('invokes `componentDidMount`', () => {
      expect(spy)
        .toHaveBeenCalled()
    })

    it('invokes `onEmbark`', () => {
      expect(MOCK_ONEMBARK)
        .toHaveBeenCalled()
    })
  })

  describe('`getErrorProps`', () => {
    it('is defined', () => {
      expect(getErrorProps)
        .toBeDefined()
    })
  })

  describe('`getEmbarkProps`', () => {
    it('is defined', () => {
      expect(getEmbarkProps)
        .toBeDefined()
    })
  })

  describe('`Signals.PENDING`', () => {
    it('renders', () => {
      const component = (
        <Embark
          status={Signals.PENDING}
          definition={MOCK_DEFINITION}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
        />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`Signals.FAILURE`', () => {
    it('renders', () => {
      const component = (
        <Embark
          status={Signals.FAILURE}
          exception={{
            name: 'MOCK NAME',
            message: 'MOCK MESSAGE'
          }}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
        />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`Signals.SUCCESS`', () => {
    it('renders', () => {
      const component = (
        <Embark
          status={Signals.SUCCESS}
          definition={MOCK_DEFINITION}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
        />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`Signals.IN_PROGRESS`', () => {
    it('renders', () => {
      const component = (
        <Embark
          status={Signals.IN_PROGRESS}
          definition={MOCK_DEFINITION}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
        />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`Signals.NO_DECISION`', () => {
    it('renders', () => {
      const component = (
        <Embark
          status={Signals.NO_DECISION}
          definition={MOCK_DEFINITION}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
        />
      )

      expect(shallow(component))
        .toMatchSnapshot()
    })
  })

  describe('`Signals.COMPLETE`', () => {
    it('renders', () => {
      const component = (
        <Embark
          status={Signals.COMPLETE}
          definition={MOCK_DEFINITION}
          onSubmit={MOCK_ONSUBMIT}
          onEmbark={MOCK_ONEMBARK}
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

  describe('`getEmbarkProps()`', () => {
    it('returns an object', () => {
      expect(getEmbarkProps(mockProps))
        .toEqual({
          definition: {},
          onSubmit: expect.any(Function)
        })
    })
  })
})
