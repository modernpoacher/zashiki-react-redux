import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Omega from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/omega'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/omega', () => {
  it('renders', () => {
    const component = (
      <Omega definition={{}} resource={{}} onSubmit={jest.fn()} />
    )

    expect(mount(component))
      .toMatchSnapshot()
  })
})
