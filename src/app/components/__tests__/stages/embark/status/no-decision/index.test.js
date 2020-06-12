import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NoDecision from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/no-decision'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/no-decision', () => {
  it('renders', () => {
    const component = (
      <NoDecision
        definition={{}}
        response={{}}
        onChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
