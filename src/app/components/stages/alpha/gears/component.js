import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'
import Gears from 'shinkansen-engine/lib/components/gears'

const log = debug('zashiki-react-redux:app:components:stages:alpha:gears')

log('`Alpha Stage` is awake')

const {
  ALPHA_PATTERN
} = Signals

const Component = ({ reverse, forward }) => (
  <Gears
    reverse={reverse}
    forward={forward}
    pattern={ALPHA_PATTERN} />
)

Component.propTypes = {
  reverse: PropTypes.object,
  forward: PropTypes.object
}

export default Component
