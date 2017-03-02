import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import * as HaltStageActions from '../../actions/halt-stage'

import {
  Navigation
} from '../../components'

import {
  HaltStage
} from '../../components/stages'

const PENDING = 5

class HaltStagePage extends React.Component {
  /**
   *  Halt routes
   */
  componentDidMount () { console.log('(HaltStagePage)componentDidMount()') // eslint-disable-line
    const {
      dispatch
    } = this.props

    /**
     *  Dispatch and notify the Node App via Axios
     */
    dispatch(HaltStageActions.fetch())
  }

  onSubmit = (values) => {
    const {
      dispatch
    } = this.props

    /**
     *  Dispatch and notify the Node App via Axios
     */
    dispatch(HaltStageActions.store(values))
  }

  render () { console.log('(HaltStagePage)render()') // eslint-disable-line
    const {
      haltStage
    } = this.props

    const {
      status
    } = haltStage

    console.log('(HaltStagePage)render()', status)

    return (
      <section>
        <header>
          <h1>Halt Stage</h1>
        </header>
        <HaltStage
          onSubmit={this.onSubmit}
          haltStage={{ status }}
        />
        <Navigation />
      </section>
    )
  }
}

HaltStagePage.propTypes = {
  params: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  haltStage: React.PropTypes.shape({
    status: React.PropTypes.number.isRequired,
    definition: React.PropTypes.oneOfType([
      React.PropTypes.object, React.PropTypes.array
    ])
  })
}

HaltStagePage.defaultProps = {
  params: {},
  dispatch: () => { /* no op */ },
  haltStage: {
    status: PENDING
  }
}

export default connect(
  ({ haltStage }) => ({ haltStage })
)(HaltStagePage)
