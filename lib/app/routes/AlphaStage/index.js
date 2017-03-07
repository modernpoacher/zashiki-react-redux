import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  RouteMaster,
  Navigation
} from '../../components'
/*
import {
  AlphaStage
} from '../../components/stages'
*/
import * as RouteMasterActions from '../../actions/route-master'

class AlphaStagePage extends RouteMaster {
  onSubmit = (response) => {
    const {
      dispatch,
      routeMaster: {
        resource
      }
    } = this.props

    const {
      alpha,
      omega
    } = resource || {}

    dispatch(RouteMasterActions.storeRoute({ resource: { alpha, omega }, response }))
  }

  render () { // // console.log('(AlphaStagePage)render()') // eslint-disable-line
    /*
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
    */

    return (
      <section>
        <header>
          <h1>Alpha Stage</h1>
        </header>{ /*
        <AlphaStage
          onSubmit={this.onSubmit}
          AlphaStage={{ definition, reverse, forward }} /> */ }
        <Navigation />
      </section>
    )
  }
}

AlphaStagePage.propTypes = {
  ...RouteMaster.propTypes
}

export default connect(
  ({ routeMaster }) => ({ routeMaster })
)(AlphaStagePage)
