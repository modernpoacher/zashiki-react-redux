import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Debark from '@modernpoacher/zashiki-react-redux/app/components/navigation/stages/debark'

import getDebarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-debark-route'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('@modernpoacher/zashiki-react-redux/app/common/get-debark-route')

jest.mock('react-router-dom')

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/stages/debark', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Debark />)
  })

  it('renders', () => {
    expect(toJson(wrapper))
      .toMatchSnapshot()
  })

  it('invokes `getDebarkRoute`', () => {
    expect(getDebarkRoute)
      .toBeCalled()
  })
})
