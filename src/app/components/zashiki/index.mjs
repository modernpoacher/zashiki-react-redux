import debug from 'debug'

import {
  connect
} from 'react-redux'

import withRouter from '#zashiki-react-redux/app/router/with-router'

import {
  mount,
  submit,
  change
} from '#zashiki-react-redux/app/actions/zashiki'

import Component from '#zashiki-react-redux/app/components/zashiki/component'

const log = debug('zashiki-react-redux/app/components/zashiki')

log('`zashiki` is awake')

function mapStateToProps ({ zashiki = {} } = {}) {
  /*
   *  log('mapStateToProps')
   */

  return { zashiki }
}

function mapDispatchToProps (dispatch) {
  /*
   *  log('mapDispatchToProps')
   */

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, { router, ...ownProps }) {
  /*
   *  log('mergeProps')
   */

  return {
    ...stateProps,
    onMount: (resource) => {
      /**
       *  log('onMount')
       */

      dispatch(mount(resource, router))
    },
    onChange: (resource) => {
      /**
       *  log('onChange')
       */

      dispatch(change(resource, router))
    },
    onSubmit: (resource, response) => {
      /**
       *  log('onSubmit')
       */

      dispatch(submit(resource, response, router))
    },
    router,
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
