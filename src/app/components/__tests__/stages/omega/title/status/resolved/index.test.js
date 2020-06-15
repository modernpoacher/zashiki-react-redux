import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Resolved from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/title/status/resolved'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/title/resolved', () => {
  it('renders', () => {
    const component = (
      <Resolved
        title='MOCK TITLE'
      />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
