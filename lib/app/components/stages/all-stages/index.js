import React from 'react'

import {
  Engine,
  Pinion
} from 'react-gears/lib'

export default class AllStages extends React.Component {
  render () { // // console.log('(AllStages)render()') // eslint-disable-line
    const {
      onSubmit,
      allStages: {
        definition,
        reverse,
        forward
      }
    } = this.props

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
  onSubmit: () => { /* no op */ }
}
