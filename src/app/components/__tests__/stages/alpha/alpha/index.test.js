import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Alpha from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/alpha'

Enzyme.configure({ adapter: new Adapter() })

const MOCK_DEFINITION = {
  meta: {
    uri: '#/'
  },
  elements: {
    title: 'MOCK TITLE',
    field: {
      id: 'MOCK ID'
    }
  }
}

const MOCK_RESOURCE = {
  alpha: 'MOCK ALPHA',
  omega: 'MOCK OMEGA'
}

const MOCK_RESPONSE = {
  '#/': 'MOCK VALUE'
}

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/alpha', () => {
  it('renders', () => {
    const component = (
      <Alpha definitions={[{ definition: MOCK_DEFINITION, resource: MOCK_RESOURCE }]} response={MOCK_RESPONSE} onChange={jest.fn()} onSubmit={jest.fn()} />
    )

    expect(mount(component))
      .toMatchSnapshot()
  })
})
