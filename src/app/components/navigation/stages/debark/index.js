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
  DEBARK,
  DEBARK_STAGE,
  DEBARK_PATTERN
} = Signals

const DEBARK_ROUTE = Rails.to({ [DEBARK]: DEBARK_STAGE }, DEBARK_PATTERN)

export default () => (
  <Link to={DEBARK_ROUTE}>
    Debark Stage
  </Link>
)
