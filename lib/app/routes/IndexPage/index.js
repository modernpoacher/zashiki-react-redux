import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  Zashiki,
  Navigation
} from '../../components'

const ZASHIKI_STATE = 'zashiki'

class IndexPage extends Zashiki {
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
  ({ [ZASHIKI_STATE]: index }) => ({ [ZASHIKI_STATE]: index })
)(IndexPage)
