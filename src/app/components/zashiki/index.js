import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import {
  mount,
  submit,
  change
} from '@modernpoacher/zashiki-react-redux/app/actions/zashiki'

import Zashiki from './component'

const mapStateToProps = ({ zashiki = {} } = {}) => ({ zashiki })

const mapDispatchToProps = (dispatch) => ({ dispatch })

const mergeProps = (stateProps, { dispatch }, { history, ...ownProps }) => ({
  ...stateProps,
  onMount: (resource) => {
    dispatch(mount(resource, history))
  },
  onSubmit: (resource, response) => {
    dispatch(submit(resource, response, history))
  },
  onChange: (resource) => {
    dispatch(change(resource, history))
  },
  history,
  ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Zashiki))
