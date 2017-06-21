import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import {
  connect
} from 'react-redux'
import {
  Boiler
} from 'shinkansen-boiler'

import * as EmbarkStageActions from '../../../actions/stages/embark-stage'

import {
  Navigation
} from '../../../components'

import {
  EmbarkStage
} from '../../../components/stages'

const {
  EMBARK
} = Boiler

class EmbarkStagePage extends React.Component {
  /**
   *  List routes
   */
  componentDidMount () { // console.log('(EmbarkStagePage)componentDidMount()') // eslint-disable-line
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

  render () { // console.log('(EmbarkStagePage)render()') // eslint-disable-line
    const {
      embark
    } = this.props

    return (
      <section>
        <header>
          <h1>Embark Route</h1>
        </header>
        <EmbarkStage
          onSubmit={this.onSubmit}
          embark={embark} />
        <Navigation />
      </section>
    )
  }
}

EmbarkStagePage.propTypes = {
  params: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  embark: PropTypes.shape({
    status: PropTypes.number.isRequired,
    definition: PropTypes.object
  })
}

export default connect(
  ({ [EMBARK]: embark }) => ({ embark })
)(EmbarkStagePage)
