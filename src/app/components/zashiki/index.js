import React from 'react' // eslint-disable-line no-unused-vars

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import { submit, change } from '@modernpoacher/zashiki-react-redux/app/actions/zashiki'

import Zashiki from './component'

const mapStateToProps = ({ zashiki = {} } = {}) => ({ zashiki })

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (resource, response) => {
    console.log('onSubmit') // , submit(resource, response))

    dispatch(submit(resource, response))
  },
  onChange: (resource) => {
    console.log('onChange') // , change(resource))

    dispatch(change(resource))
  }
})

const mergeProps = (stateProps, { onSubmit, onChange }, ownProps) => ({
  ...stateProps,
  onSubmit,
  onChange,
  ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Zashiki))
