import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Pending from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/pending'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/pending', () => {
  it('renders', () => {
    const component = (
      <Pending />
    )

    expect(toJson(shallow(component)))
      .toMatchSnapshot()
  })
})
