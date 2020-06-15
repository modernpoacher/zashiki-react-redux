import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Embark from '@modernpoacher/zashiki-react-redux/app/components/navigation/stages/embark'

import getEmbarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-embark-route'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('@modernpoacher/zashiki-react-redux/app/common/get-embark-route')

jest.mock('react-router-dom')

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/stages/embark', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Embark />)
  })

  it('renders', () => {
    expect(wrapper)
      .toMatchSnapshot()
  })

  it('invokes `getEmbarkRoute`', () => {
    expect(getEmbarkRoute)
      .toBeCalled()
  })
})
