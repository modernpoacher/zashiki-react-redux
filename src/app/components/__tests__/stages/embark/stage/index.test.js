import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/stage'

Enzyme.configure({ adapter: new Adapter() })

const MOCK_DEFINITION = {
  meta: {},
  elements: {}
}

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/stage', () => {
  it('renders', () => {
    const component = (
      <Stage
        definition={MOCK_DEFINITION}
        response={{}}
        errors={[]}
        onChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    )

    expect(toJson(shallow(component)))
      .toMatchSnapshot()
  })
})
