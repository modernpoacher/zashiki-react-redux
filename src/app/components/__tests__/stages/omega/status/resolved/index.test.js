import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Resolved from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/resolved'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/resolved', () => {
  it('renders', () => {
    const component = (
      <Resolved
        description='MOCK DESCRIPTION'
        definition={{}}
        resource={{}}
        response={{}}
        errors={[]}
        onChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
