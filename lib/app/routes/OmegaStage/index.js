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

class OmegaStagePage extends RouteMaster {
  onSubmit = (response) => {
    const {
      dispatch,
      routeMaster: {
        resource
      }
    } = this.props

    dispatch(RouteMasterActions.store(resource, response))
  }

  render () { // // console.log('(OmegaStagePage)render()') // eslint-disable-line
    const {
      routeMaster: {
        definition,
        gears
      }
    } = this.props

    const {
      reverse,
      forward
    } = gears || {}

    return (
      <section>
        <header>
          <h1>Omega Stage</h1>
        </header>
        <OmegaStage
          onSubmit={this.onSubmit}
          omega={{ definition, reverse, forward }} />
        <Navigation />
      </section>
    )
  }
}

OmegaStagePage.propTypes = {
  ...RouteMaster.propTypes
}

export default connect(
  ({ routeMaster }) => ({ routeMaster })
)(OmegaStagePage)
