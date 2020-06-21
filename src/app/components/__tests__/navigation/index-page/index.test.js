import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import IndexPage from '@modernpoacher/zashiki-react-redux/app/components/navigation/index-page'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-router-dom')

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/index-page', () => {
  it('renders', () => {
    expect(toJson(shallow(<IndexPage />)))
      .toMatchSnapshot()
  })
})
