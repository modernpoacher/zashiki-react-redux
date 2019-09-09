import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Success from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/status/success'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/status/success', () => {
  it('renders', () => {
    const component = (
      <Success definitions={[]} onSubmit={jest.fn()} />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
