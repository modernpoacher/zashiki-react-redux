import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'
import Gears from 'shinkansen-engine/lib/components/gears'

const log = debug('zashiki-react-redux:app:components:stages:omega:gears')

log('`Omega Stage` is awake')

const {
  OMEGA_PATTERN
} = Signals

const Component = ({ reverse, forward }) => (
  <Gears
    reverse={reverse}
    forward={forward}
    pattern={OMEGA_PATTERN} />
)

Component.propTypes = {
  reverse: PropTypes.object,
  forward: PropTypes.object
}

export default Component
