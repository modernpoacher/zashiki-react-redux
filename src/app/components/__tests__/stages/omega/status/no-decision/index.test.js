import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NoDecision from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/no-decision'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/no-decision', () => {
  it('renders', () => {
    const component = (
      <NoDecision definition={{}} resource={{}} onSubmit={jest.fn()} />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
