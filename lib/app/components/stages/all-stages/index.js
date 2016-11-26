import React from 'react'

export default class AllStages extends React.Component {
  render () {
    return <div className='all-stages' />
  }
}

AllStages.propTypes = {
  allStages: React.PropTypes.object
}

AllStages.defaultProps = {
  allStages: {}
}
