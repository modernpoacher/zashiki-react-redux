import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import {
  connect
} from 'react-redux'
import {
  Signals
} from 'shinkansen-signals'

import * as DebarkStageActions from 'zashiki-react-redux/app/actions/stages/debark'

import {
  Navigation
} from 'zashiki-react-redux/app/components'

import {
  transform
} from 'zashiki-react-redux/app/transformers/stages/debark'

import {
  DebarkStage
} from 'zashiki-react-redux/app/components/stages'

const {
  DEBARK
} = Signals

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
  ({ [DEBARK]: debark = {} }) => ({ debark: transform(debark) })
)(DebarkStagePage)
