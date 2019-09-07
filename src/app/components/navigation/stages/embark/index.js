import React from 'react'
import {
  Link
} from 'react-router-dom'

import {
  Rails
} from 'shinkansen-rails'

import {
  Signals
} from 'shinkansen-signals'

const {
  EMBARK,
  EMBARK_STAGE,
  EMBARK_PATTERN
} = Signals

const EMBARK_ROUTE = Rails.to({ [EMBARK]: EMBARK_STAGE }, EMBARK_PATTERN)

export default () => (
  <Link to={EMBARK_ROUTE}>
    Embark Stage
  </Link>
)
