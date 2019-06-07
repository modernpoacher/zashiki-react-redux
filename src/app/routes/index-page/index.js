import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  Zashiki,
  Navigation
} from '@modernpoacher/zashiki-react-redux/app/components'

import { submit, change } from '@modernpoacher/zashiki-react-redux/app/actions/zashiki'

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

const mapStateToProps = ({ zashiki = {} } = {}) => ({ zashiki })

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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(IndexPage)
