import React from 'react'

import IndexLink from './index-page'
import EmbarkStageLink from './stages/embark'
import DebarkStageLink from './stages/debark'
import ConfirmStageLink from './stages/confirm'

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
