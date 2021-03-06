import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Resolved from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/resolved'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/resolved', () => {
  it('renders', () => {
    const component = (
      <Resolved
        definition={{}}
        response={{}}
        onChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    )

    expect(toJson(shallow(component)))
      .toMatchSnapshot()
  })
})
