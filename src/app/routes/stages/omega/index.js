import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  submit
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

import {
  Zashiki,
  Navigation
} from '@modernpoacher/zashiki-react-redux/app/components'

import {
  transform
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/omega'

import {
  OmegaStage
} from '@modernpoacher/zashiki-react-redux/app/components/stages'

class OmegaStagePage extends Zashiki {
  onSubmit = (response) => {
    const {
      dispatch,
      omega: {
        resource
      }
    } = this.props

    dispatch(submit(resource, response))
  }

  render () { // console.log('(OmegaStagePage)render()') // eslint-disable-line
    const {
      omega
    } = this.props

    return (
      <section>
        <header>
          <h1>Omega Stage</h1>
        </header>
        <OmegaStage
          onSubmit={this.onSubmit}
          omega={omega} />
        <Navigation />
      </section>
    )
  }
}

OmegaStagePage.propTypes = {
  ...Zashiki.propTypes
}

export default connect(
  ({ zashiki = {} }) => ({ omega: transform(zashiki) })
)(OmegaStagePage)
