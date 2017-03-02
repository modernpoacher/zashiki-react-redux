import React from 'react'

import {
  Engine,
  Pinion
} from 'react-gears/lib'

export default class StageZero extends React.Component {
  render () { // // console.log('(StageZero)render()') // eslint-disable-line
    const {
      onSubmit,
      stageZero: {
        definition,
        reverse,
        forward
      }
    } = this.props

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
    // status: React.PropTypes.number.isRequired,
    definition: React.PropTypes.shape({
      schema: React.PropTypes.object,
      formData: React.PropTypes.object,
      uiSchema: React.PropTypes.object
    }),
    reverse: React.PropTypes.object,
    forward: React.PropTypes.object
  }).isRequired
}

StageZero.defaultProps = {
  onSubmit: () => { /* no op */ }
}
