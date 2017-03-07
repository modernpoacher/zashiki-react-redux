import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import * as DebarkStageActions from '../../actions/halt-stage'

import {
  Navigation
} from '../../components'

import {
  DebarkStage
} from '../../components/stages'

// const PENDING = 5

class DebarkStagePage extends React.Component {
  /**
   *  Halt routes
   */
  componentDidMount () { // // console.log('(DebarkStagePage)componentDidMount()') // eslint-disable-line
    const {
      dispatch
    } = this.props

    /**
     *  Dispatch and notify the Node App via Axios
     */
    dispatch(DebarkStageActions.fetch())
  }

  onSubmit = (response) => {
    const {
      dispatch
    } = this.props

    /**
     *  Dispatch and notify the Node App via Axios
     */
    dispatch(DebarkStageActions.store(response))
  }

  render () { // // console.log('(DebarkStagePage)render()') // eslint-disable-line
    const {
      debark: {
        status
      }
    } = this.props

    return (
      <section>
        <header>
          <h1>Debark Route</h1>
        </header>
        <DebarkStage
          onSubmit={this.onSubmit}
          debark={{ status }} />
        <Navigation />
      </section>
    )
  }
}

DebarkStagePage.propTypes = {
  params: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  debark: React.PropTypes.shape({
    status: React.PropTypes.number.isRequired,
    definition: React.PropTypes.object /* React.PropTypes.oneOfType([
      React.PropTypes.object, React.PropTypes.array
    ]) */
  })
}

export default connect(
  ({ debark }) => ({ debark })
)(DebarkStagePage)
