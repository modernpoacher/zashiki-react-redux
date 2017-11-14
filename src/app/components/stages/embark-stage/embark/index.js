import React from 'react'
import PropTypes from 'prop-types'
import {
  Signals
} from 'shinkansen-signals'
import {
  Motor
} from 'shinkansen-motor'

const Complete = ({ definition, onSubmit }) => (
  <div className='embark-stage'>
    <Motor
      onSubmit={onSubmit}
      definition={definition} />
  </div>
)

Complete.propTypes = {
  definition: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

Complete.defaultProps = {
  definition: {},
  onSubmit: () => {}
}

const Pending = () => (
  <h2>Pending</h2>
)

const Embark = ({ status, definition, onSubmit }) => {
  switch (status) {
    case Signals.COMPLETE: return (
      <Complete
        onSubmit={onSubmit}
        definition={definition} />
    )
    default:
      return <Pending />
  }
}

Embark.propTypes = {
  status: PropTypes.number.isRequired,
  definition: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

Embark.defaultProps = {
  status: Signals.PENDING,
  definition: {},
  onSubmit: () => {}
}

export default Embark
