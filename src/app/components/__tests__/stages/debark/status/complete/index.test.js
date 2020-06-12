import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Complete from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/complete'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/complete', () => {
  it('renders', () => {
    const component = (
      <Complete
        definitions={[]}
        token={{}}
        onSubmit={jest.fn()}
      />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
