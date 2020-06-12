import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import InProgress from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/in-progress'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/in-progress', () => {
  it('renders', () => {
    const component = (
      <InProgress description='MOCK DESCRIPTION' definition={{}} resource={{}} response={{}} onChange={jest.fn()} onSubmit={jest.fn()} />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
