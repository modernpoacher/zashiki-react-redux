import React from 'react'

import {
  Engine,
  Pinion
} from 'react-gears/lib'

export default class AlphaStage extends React.Component {
  render () { // // console.log('(AlphaStage)render()') // eslint-disable-line
    const {
      onSubmit,
      alphaStage: {
        definition,
        reverse,
        forward
      }
    } = this.props

    return (
      <div className='alpha-stage'>
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

AlphaStage.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  alphaStage: React.PropTypes.shape({
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

AlphaStage.defaultProps = {
  onSubmit: () => { /* no op */ }
}
