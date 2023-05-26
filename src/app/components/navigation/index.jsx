import React from 'react'

import IndexLink from './index-page/index.jsx'
import EmbarkStageLink from './stages/embark/index.jsx'
import DebarkStageLink from './stages/debark/index.jsx'
import ConfirmStageLink from './stages/confirm/index.jsx'

export default () => (
  <nav>
    <ul>
      <li>
        <IndexLink />
      </li>
      <li>
        <EmbarkStageLink />
      </li>
      <li>
        <DebarkStageLink />
      </li>
      <li>
        <ConfirmStageLink />
      </li>
    </ul>
  </nav>
)
