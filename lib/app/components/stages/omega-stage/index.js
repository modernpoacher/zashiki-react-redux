import React from 'react'

import {
  Engine,
  Pinion
} from 'react-gears/lib'

export default class OmegaStage extends React.Component {
  render () { // // console.log('(OmegaStage)render()') // eslint-disable-line
    const {
      onSubmit,
      omegaStage: {
        definition,
        reverse,
        forward
      }
    } = this.props

    return (
      <div className='omega-stage'>
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

OmegaStage.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  omegaStage: React.PropTypes.shape({
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

OmegaStage.defaultProps = {
  onSubmit: () => { /* no op */ }
}
