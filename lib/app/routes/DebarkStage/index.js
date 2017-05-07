import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import * as DebarkStageActions from '../../actions/debark-stage'

import {
  Navigation
} from '../../components'

import {
  DebarkStage
} from '../../components/stages'

const ZASHIKI_DEBARK_STATE = 'debark'

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
      [ZASHIKI_DEBARK_STATE]: debark
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
  params: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  debark: React.PropTypes.shape({
    status: React.PropTypes.number.isRequired,
    definition: React.PropTypes.object
  })
}

export default connect(
  ({ [ZASHIKI_DEBARK_STATE]: debark }) => ({ [ZASHIKI_DEBARK_STATE]: debark })
)(DebarkStagePage)
