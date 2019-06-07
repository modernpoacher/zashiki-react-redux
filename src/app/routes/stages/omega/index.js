import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  Signals
} from 'shinkansen-signals'

import {
  Zashiki,
  Navigation
} from '@modernpoacher/zashiki-react-redux/app/components'

import {
  transform
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/omega'

import { submit, change } from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

import {
  OmegaStage
} from '@modernpoacher/zashiki-react-redux/app/components/stages'

const {
  OMEGA
} = Signals

class OmegaStagePage extends Zashiki {
  onSubmit = (response) => {
    const {
      onSubmit,
      resource
    } = this.props

    onSubmit(resource, response)
  }

  render () { // console.log('(OmegaStagePage)render()') // eslint-disable-line
    return (
      <section>
        <header>
          <h1>Omega Stage</h1>
        </header>
        <OmegaStage
          {...this.props}
          onSubmit={this.onSubmit} />
        <Navigation />
      </section>
    )
  }
}

OmegaStagePage.propTypes = {
  ...Zashiki.propTypes
}

const mapStateToProps = ({ [OMEGA]: omega = {} }) => ({ ...transform(omega) })

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (resource, response) => {
    dispatch(submit(resource, response))
  },
  onChange: (resource) => {
    dispatch(change(resource))
  }
})

const mergeProps = (stateProps, { onSubmit, onChange }, ownProps) => ({
  ...stateProps,
  onSubmit,
  onChange,
  ...ownProps
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(OmegaStagePage)
