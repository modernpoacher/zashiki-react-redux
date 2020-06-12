import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Complete from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/status/complete'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/status/complete', () => {
  it('renders', () => {
    const component = (
      <Complete
        definitions={[]}
        onChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
