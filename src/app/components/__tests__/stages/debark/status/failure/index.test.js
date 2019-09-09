import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Failure from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/failure'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/status/failure', () => {
  it('renders', () => {
    const component = (
      <Failure name={'MOCK EXCEPTION'} onSubmit={jest.fn()} />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
