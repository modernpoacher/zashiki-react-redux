import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/count/component'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/count/component', () => {
  it('renders', () => {
    const component = (
      <Count index={1} count={2} />
    )

    expect(mount(component))
      .toMatchSnapshot()
  })
})
