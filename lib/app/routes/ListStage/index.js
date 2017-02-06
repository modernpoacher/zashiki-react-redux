import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

// import * as RouteMasterActions from '../../actions/route-master'

import {
  RouteMaster,
  Navigation
} from '../../components'

class ListStagePage extends RouteMaster {
  render () {
    // console.log('(ListStagePage)render()')

    return (
      <section>
        <header>
          <h1>List Stage</h1>
        </header>
        <Navigation />
      </section>
    )
  }
}

/*
ListStagePage.needs = [
  RouteMasterActions.fetchRoute
]
*/

export default connect(
  (state) => ({
    routeMaster: state.routeMaster
  })
)(ListStagePage)
