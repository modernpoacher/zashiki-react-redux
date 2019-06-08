import React from 'react' // eslint-disable-line no-unused-vars

import Zashiki from '@modernpoacher/zashiki-react-redux/app/components/zashiki'

import {
  Navigation
} from '@modernpoacher/zashiki-react-redux/app/components'

export default () => (
  <Zashiki>
    <section>
      <header>
        <h1>Index Page</h1>
      </header>
      <Navigation />
    </section>
  </Zashiki>
)
