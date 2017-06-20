import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import {
  connect
} from 'react-redux'
import {
  Boiler
} from 'react-boiler'

import * as DebarkStageActions from '../../actions/debark-stage'

import {
  Navigation
} from '../../components'

import {
  DebarkStage
} from '../../components/stages'

const {
  DEBARK
} = Boiler

class DebarkStagePage extends React.Component {
  /**
   *  Halt routes
   */
  componentDidMount () { // console.log('(DebarkStagePage)componentDidMount()') // eslint-disable-line
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

  render () { // console.log('(DebarkStagePage)render()') // eslint-disable-line
    const {
      debark
    } = this.props

    return (
      <section>
        <header>
          <h1>Debark Route</h1>
        </header>
        <DebarkStage
          onSubmit={this.onSubmit}
          debark={debark} />
        <Navigation />
      </section>
    )
  }
}

DebarkStagePage.propTypes = {
  params: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  debark: PropTypes.shape({
    status: PropTypes.number.isRequired,
    definition: PropTypes.object
  })
}

export default connect(
  ({ [DEBARK]: debark }) => ({ debark })
)(DebarkStagePage)
