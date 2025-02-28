import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Signals from 'shinkansen-engine/components/signals'

import Gears from 'shinkansen-engine/components/gears'

const log = debug('zashiki-react-redux/app/components/stages/alpha/gears/component')

log('`zashiki` is awake')

const {
  ALPHA_PATTERN
} = Signals

const Component = ({ reverse, forward }) => (
  <Gears
    reverse={reverse}
    forward={forward}
    pattern={ALPHA_PATTERN}
  />
)

Component.propTypes = {
  reverse: PropTypes.shape({}),
  forward: PropTypes.shape({})
}

export default Component
