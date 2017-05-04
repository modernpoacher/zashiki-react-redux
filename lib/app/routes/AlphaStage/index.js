import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  RouteMaster,
  Navigation
} from '../../components'

import {
  AlphaStage
} from '../../components/stages'

import * as AlphaStageActions from '../../actions/stages/alpha-stage'

const ROUTE_MASTER_STATE = 'routeMaster'

class AlphaStagePage extends RouteMaster {
  onSubmit = (resource, response) => {
    const {
      dispatch
    } = this.props

    dispatch(AlphaStageActions.store(resource, response))
  }

  render () { // // console.log('(AlphaStagePage)render()', this.props) // eslint-disable-line
    const {
      [ROUTE_MASTER_STATE]: alpha = {}
    } = this.props

    return (
      <section>
        <header>
          <h1>Alpha Stage</h1>
        </header>
        <AlphaStage
          onSubmit={this.onSubmit}
          alpha={alpha} />
        <Navigation />
      </section>
    )
  }
}

AlphaStagePage.propTypes = {
  ...RouteMaster.propTypes
}

export default connect(
  ({ [ROUTE_MASTER_STATE]: alpha }) => ({ [ROUTE_MASTER_STATE]: alpha })
)(AlphaStagePage)
