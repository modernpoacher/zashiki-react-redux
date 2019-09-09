import React from 'react'

import IndexPage from './index-page'
import EmbarkStagePage from './stages/embark'
import DebarkStagePage from './stages/debark'

export default () => (
  <nav>
    <ul>
      <li>
        <IndexPage />
      </li>
      <li>
        <EmbarkStagePage />
      </li>
      <li>
        <DebarkStagePage />
      </li>
    </ul>
  </nav>
)
