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
  StageZero
} from '../../components/stages'
*/
import * as RouteMasterActions from '../../actions/route-master'

class StageZeroPage extends RouteMaster {
  onSubmit = (response) => {
    const {
      routeMaster, dispatch
    } = this.props

    const {
      resource
    } = routeMaster

    const {
      stageZero,
      allStages
    } = resource || {}

    dispatch(RouteMasterActions.storeRoute({ resource: { stageZero, allStages }, response }))
  }

  render () { // console.log('(StageZeroPage)render()') // eslint-disable-line
    /*
    const {
      routeMaster
    } = this.props

    const {
      definition, gears
    } = routeMaster

    const {
      reverse,
      forward
    } = gears || {}
    */

    return (
      <section>
        <header>
          <h1>Stage Zero</h1>
        </header>
        { /* <StageZero
          onSubmit={this.onSubmit}
          stageZero={{ definition, reverse, forward }} /> */ }
        <Navigation />
      </section>
    )
  }
}

export default connect(
  (state) => ({
    routeMaster: state.routeMaster
  })
)(StageZeroPage)
