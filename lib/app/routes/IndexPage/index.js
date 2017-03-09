import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  RouteMaster,
  Navigation
} from '../../components'

const ROUTE_MASTER_STATE = 'routeMaster'

class IndexPage extends RouteMaster {
  render () { // // console.log('(IndexPage)render()') // eslint-disable-line
    return (
      <section>
        <header>
          <h1>Index Page</h1>
        </header>
        <Navigation />
      </section>
    )
  }
}

export default connect(
  ({ [ROUTE_MASTER_STATE]: index }) => ({ [ROUTE_MASTER_STATE]: index })
)(IndexPage)
