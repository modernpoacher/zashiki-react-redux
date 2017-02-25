import React from 'react'

import {
  Engine
} from 'react-gears/lib'

export default class ListStage extends React.Component {
  render () { // // console.log('(ListStage)render()') // eslint-disable-line
    const {
      onSubmit,
      listStage
    } = this.props

    const {
      definition
    } = listStage

    return (
      <div className='list-stage'>
        <Engine
          onSubmit={onSubmit}
          definition={definition} />
      </div>
    )
  }
}

ListStage.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  listStage: React.PropTypes.shape({
    definition: React.PropTypes.object
  }).isRequired
}

ListStage.defaultProps = {
  onSubmit: () => { /* no op */ },
  listStage: {}
}
