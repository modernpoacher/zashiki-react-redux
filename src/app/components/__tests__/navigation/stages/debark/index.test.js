import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {
  Rails
} from 'shinkansen-rails'

import Debark from '@modernpoacher/zashiki-react-redux/app/components/navigation/stages/debark'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('shinkansen-rails', () => ({
  Rails: {
    to: jest.fn().mockImplementation(() => 'MOCK TO')
  }
}))

jest.mock('shinkansen-signals', () => ({
  Signals: {
    DEBARK: 'MOCK DEBARK',
    DEBARK_STAGE: 'MOCK DEBARK STAGE',
    DEBARK_PATTERN: 'MOCK DEBARK PATTERN'
  }
}))

jest.mock('react-router-dom')

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/stages/debark', () => {
  it('renders', () => {
    expect(shallow(<Debark />))
      .toMatchSnapshot()
  })

  it('invokes `Rails.to`', () => {
    expect(Rails.to)
      .toBeCalledWith({ 'MOCK DEBARK': 'MOCK DEBARK STAGE' }, 'MOCK DEBARK PATTERN')
  })
})
