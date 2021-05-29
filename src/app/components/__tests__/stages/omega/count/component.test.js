import 'jsdom-global/register'

import React from 'react'
import Enzyme, { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/count/component'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/count/component', () => {
  it('renders', () => {
    const component = (
      <Count index={1} count={2} />
    )

    expect(toJson(mount(component)))
      .toMatchSnapshot()
  })
})
