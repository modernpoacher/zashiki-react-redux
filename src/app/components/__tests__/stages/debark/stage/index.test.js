import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/stage'

Enzyme.configure({ adapter: new Adapter() })

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/stage', () => {
  it('renders', () => {
    const component = (
      <Stage
        definitions={[]}
        token={{}}
        onSubmit={jest.fn()}
      />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
