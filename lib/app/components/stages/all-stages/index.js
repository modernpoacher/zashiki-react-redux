import React from 'react'

import {
  Engine,
  Pinion
} from 'react-gears/lib'

export default class AllStages extends React.Component {
  render () {
    const {
      onSubmit,
      allStages
    } = this.props

    const {
      definition,
      reverse,
      forward
    } = allStages

    return (
      <div className='all-stages'>
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

AllStages.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  allStages: React.PropTypes.shape({
    definition: React.PropTypes.object,
    reverse: React.PropTypes.object,
    forward: React.PropTypes.object
  }).isRequired
}

AllStages.defaultProps = {
  onSubmit: () => { /* no op */ },
  allStages: {}
}
