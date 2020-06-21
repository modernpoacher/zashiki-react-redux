import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Confirm from '@modernpoacher/zashiki-react-redux/app/components/navigation/stages/confirm'

import getConfirmRoute from '@modernpoacher/zashiki-react-redux/app/common/get-confirm-route'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('@modernpoacher/zashiki-react-redux/app/common/get-confirm-route')

jest.mock('react-router-dom')

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/stages/confirm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Confirm />)
  })

  it('renders', () => {
    expect(toJson(wrapper))
      .toMatchSnapshot()
  })

  it('invokes `getConfirmRoute`', () => {
    expect(getConfirmRoute)
      .toBeCalled()
  })
})
