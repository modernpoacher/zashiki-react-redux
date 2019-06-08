import React from 'react'

import EmbarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/embark'

import {
  Navigation
} from '@modernpoacher/zashiki-react-redux/app/components'

export default () => (
  <section>
    <header>
      <h1>Embark Route</h1>
    </header>
    <EmbarkStage />
    <Navigation />
  </section>
)
