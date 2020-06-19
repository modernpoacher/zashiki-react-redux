import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Gears from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/gears/component'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  OMEGA_PATTERN: 'MOCK OMEGA PATTERN'
}))

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/gears/component', () => {
  it('renders', () => {
    const component = (
      <Gears />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })

  it('renders `reverse`', () => {
    const component = (
      <Gears reverse={{ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }} />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })

  it('renders `forward`', () => {
    const component = (
      <Gears forward={{ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }} />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })

  it('renders `reverse` and `forward`', () => {
    const component = (
      <Gears
        reverse={{ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }}
        forward={{ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }}
      />
    )

    expect(shallow(component))
      .toMatchSnapshot()
  })
})
