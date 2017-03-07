import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import * as EmbarkStageActions from '../../actions/list-stage'

import {
  Navigation
} from '../../components'

import {
  EmbarkStage
} from '../../components/stages'

// const PENDING = 5

class EmbarkStagePage extends React.Component {
  /**
   *  List routes
   */
  componentDidMount () { // // console.log('(EmbarkStagePage)componentDidMount()') // eslint-disable-line
    const {
      dispatch
    } = this.props

    /**
     *  Dispatch and notify the Node App via Axios
     */
    dispatch(EmbarkStageActions.fetch())
  }

  onSubmit = (response) => {
    const {
      dispatch
    } = this.props

    /**
     *  Dispatch and notify the Node App via Axios
     */
    dispatch(EmbarkStageActions.store(response))
  }

  render () { // // console.log('(EmbarkStagePage)render()') // eslint-disable-line
    const {
      embark: {
        status, definition
      }
    } = this.props

    return (
      <section>
        <header>
          <h1>Embark Route</h1>
        </header>
        <EmbarkStage
          onSubmit={this.onSubmit}
          embark={{ status, definition }} />
        <Navigation />
      </section>
    )
  }
}

EmbarkStagePage.propTypes = {
  params: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  embark: React.PropTypes.shape({
    status: React.PropTypes.number.isRequired,
    definition: React.PropTypes.object /* React.PropTypes.oneOfType([
      React.PropTypes.object, React.PropTypes.array
    ]) */
  })
}

export default connect(
  ({ embark }) => ({ embark })
)(EmbarkStagePage)
