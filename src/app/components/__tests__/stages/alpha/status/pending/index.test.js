import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Pending from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/status/pending'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/status/pending', () => {
  it('renders', () => {
    const component = (
      <Pending definitions={[]} response={{}} onChange={jest.fn()} onSubmit={jest.fn()} />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
