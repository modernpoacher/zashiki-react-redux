import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  RouteMaster,
  Navigation
} from '../../components'

class IndexPage extends RouteMaster {
  render () {
    console.log('(IndexPage)render()')

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
  (state) => ({
    routeMaster: state.routeMaster
  })
)(IndexPage)
