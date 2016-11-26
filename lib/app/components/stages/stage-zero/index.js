import React from 'react'

export default class StageZero extends React.Component {
  render () {
    return <div className='stage-zero' />
  }
}

StageZero.propTypes = {
  stageZero: React.PropTypes.object
}

StageZero.defaultProps = {
  stageZero: {}
}
