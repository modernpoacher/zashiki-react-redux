import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Success from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/success'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/success', () => {
  it('renders', () => {
    const component = (
      <Success definition={{}} onChange={jest.fn()} onSubmit={jest.fn()} />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
