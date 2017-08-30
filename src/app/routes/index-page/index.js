import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  Zashiki,
  Navigation
} from 'zashiki-react-redux/app/components'

class IndexPage extends Zashiki {
  render () { // console.log('(IndexPage)render()') // eslint-disable-line
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
  ({ zashiki }) => ({ zashiki })
)(IndexPage)
