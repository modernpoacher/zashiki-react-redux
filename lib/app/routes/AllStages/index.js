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
  AllStages
} from '../../components/stages'
*/
import * as RouteMasterActions from '../../actions/route-master'

class AllStagesPage extends RouteMaster {
  onSubmit = (response) => {
    const {
      routeMaster, dispatch
    } = this.props

    const {
      resource
    } = routeMaster

    const {
      allStages,
      stageZero
    } = resource || {}

    dispatch(RouteMasterActions.storeRoute({ resource: { allStages, stageZero }, response }))
  }

  render () { // // console.log('(AllStagesPage)render()') // eslint-disable-line
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
          <h1>All Stages</h1>
        </header>
        { /* <AllStages
          onSubmit={this.onSubmit}
          AllStages={{ definition, reverse, forward }} /> */ }
        <Navigation />
      </section>
    )
  }
}

export default connect(
  ({ routeMaster }) => ({ routeMaster })
)(AllStagesPage)
