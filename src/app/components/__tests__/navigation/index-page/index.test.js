import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import IndexPage from '@modernpoacher/zashiki-react-redux/app/components/navigation/index-page'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-router-dom')

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/index-page', () => {
  it('renders', () => {
    expect(shallow(<IndexPage />))
      .toMatchSnapshot()
  })
})
