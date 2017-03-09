import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  RouteMaster,
  Navigation
} from '../../components'

import {
  OmegaStage
} from '../../components/stages'

import * as RouteMasterActions from '../../actions/route-master'

const ROUTE_MASTER_STATE = 'routeMaster'

class OmegaStagePage extends RouteMaster {
  onSubmit = (response) => {
    const {
      dispatch,
      [ROUTE_MASTER_STATE]: {
        resource
      }
    } = this.props

    dispatch(RouteMasterActions.store(resource, response))
  }

  render () { // // console.log('(OmegaStagePage)render()') // eslint-disable-line
    const {
      [ROUTE_MASTER_STATE]: omega = {}
    } = this.props

    return (
      <section>
        <header>
          <h1>Omega Stage</h1>
        </header>
        <OmegaStage
          onSubmit={this.onSubmit}
          omega={omega} />
        <Navigation />
      </section>
    )
  }
}

OmegaStagePage.propTypes = {
  ...RouteMaster.propTypes
}

export default connect(
  ({ [ROUTE_MASTER_STATE]: omega }) => ({ [ROUTE_MASTER_STATE]: omega })
)(OmegaStagePage)
