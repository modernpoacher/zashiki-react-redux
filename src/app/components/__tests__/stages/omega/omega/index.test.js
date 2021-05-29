import 'jsdom-global/register'

import React from 'react'
import Enzyme, { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Omega from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/omega'

Enzyme.configure({ adapter: new Adapter() })

const MOCK_DESCRIPTION = 'MOCK DESCRIPTION'

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

const MOCK_ERRORS = []

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/omega', () => {
  it('renders', () => {
    const component = (
      <Omega
        description={MOCK_DESCRIPTION}
        definition={MOCK_DEFINITION}
        resource={MOCK_RESOURCE}
        response={MOCK_RESPONSE}
        errors={MOCK_ERRORS}
        onChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    )

    expect(toJson(mount(component)))
      .toMatchSnapshot()
  })
})
