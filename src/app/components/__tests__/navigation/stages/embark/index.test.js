import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Rails from 'shinkansen-engine/lib/components/rails'

import Embark from '@modernpoacher/zashiki-react-redux/app/components/navigation/stages/embark'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('shinkansen-engine/lib/components/rails', () => ({
  to: jest.fn().mockImplementation(() => 'MOCK TO')
}))

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  EMBARK: 'MOCK EMBARK',
  EMBARK_STAGE: 'MOCK EMBARK STAGE',
  EMBARK_PATTERN: 'MOCK EMBARK PATTERN'
}))

jest.mock('react-router-dom')

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/stages/embark', () => {
  it('renders', () => {
    expect(shallow(<Embark />))
      .toMatchSnapshot()
  })

  it('invokes `Rails.to`', () => {
    expect(Rails.to)
      .toBeCalledWith({ 'MOCK EMBARK': 'MOCK EMBARK STAGE' }, 'MOCK EMBARK PATTERN')
  })
})
