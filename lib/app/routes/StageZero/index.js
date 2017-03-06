import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  RouteMaster,
  Navigation
} from '../../components'

import {
  StageZero
} from '../../components/stages'

import * as RouteMasterActions from '../../actions/route-master'

class StageZeroPage extends RouteMaster {
  onSubmit = (response) => {
    const {
      dispatch,
      routeMaster: {
        resource
      }
    } = this.props

    dispatch(RouteMasterActions.storeRoute({ resource, response }))
      .then(() => dispatch(RouteMasterActions.queryRoute()))
  }

  render () { // // console.log('(StageZeroPage)render()') // eslint-disable-line
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
          <h1>Stage Zero</h1>
        </header>
        <StageZero
          onSubmit={this.onSubmit}
          stageZero={{ definition, reverse, forward }} />
        <Navigation />
      </section>
    )
  }
}

StageZeroPage.propTypes = {
  ...RouteMaster.propTypes
}

export default connect(
  ({ routeMaster }) => ({ routeMaster })
)(StageZeroPage)
