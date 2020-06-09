import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Alpha from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/alpha'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/alpha', () => {
  it('renders', () => {
    const component = (
      <Alpha definitions={[{ definition: {}, resource: {} }]} onChange={jest.fn()} onSubmit={jest.fn()} />
    )

    expect(mount(component))
      .toMatchSnapshot()
  })
})
