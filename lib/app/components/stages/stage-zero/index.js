import React from 'react'

import {
  Engine,
  Pinion
} from 'react-gears/lib'

export default class StageZero extends React.Component {
  render () {
    const {
      onSubmit,
      stageZero
    } = this.props

    const {
      definition,
      reverse,
      forward
    } = stageZero

    return (
      <div className='stage-zero'>
        <Engine
          onSubmit={onSubmit}
          definition={definition} />
        <Pinion
          reverse={reverse}
          forward={forward} />
      </div>
    )
  }
}

StageZero.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  stageZero: React.PropTypes.shape({
    definition: React.PropTypes.object,
    reverse: React.PropTypes.object,
    forward: React.PropTypes.object
  }).isRequired
}

StageZero.defaultProps = {
  onSubmit: () => { /* no op */ },
  stageZero: {}
}
