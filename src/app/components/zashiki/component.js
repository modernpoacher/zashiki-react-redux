import { Component } from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import debug from 'debug'

const log = debug('zashiki-react-redux:app:components:zashiki')

export const resource = (alpha, omega) => ({ ...(alpha ? { alpha, ...(omega ? { omega } : {}) } : {}) })

export default class Zashiki extends Component {
  /*
   *  Create initial state from initial props
   */
  constructor (props) {
    super(props)

    const {
      match: {
        params: {
          alpha,
          omega
        }
      }
    } = props

    this.state = {
      now: Immutable.Map(resource(alpha, omega))
    }
  }

  /*
   *  Interrogate initial props for current Route 'params' (if the component has mounted then the route has changed)
   */
  componentDidMount () {
    log('componentDidMount()')

    const {
      onMount,
      match: {
        params: {
          alpha,
          omega
        }
      }
    } = this.props

    /*
     *  Dispatch and notify the Node app
     */
    return onMount(resource(alpha, omega))
  }

  /**
   *  Interrogate latest props for changes to Route params (the route may have changed)
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Current state
   */
  static getDerivedStateFromProps (props, state) {
    log('getDerivedStateFromProps()')

    const {
      match: {
        params: {
          alpha,
          omega
        }
      }
    } = props

    /*
     *  Create const 'now' from params 'alpha' and 'omega' (as an Immutable 'Map')
     */
    const now = Immutable.Map(resource(alpha, omega))

    /*
     *  Assign state 'now' to const 'was' (it's an Immutable 'Map')
     */
    const {
      now: was
    } = state

    if (!Immutable.is(was, now)) {
      const {
        onMount
      } = props

      /*
       *  Dispatch and notify the Node app
       */
      onMount(resource(alpha, omega))

      /*
       *  Changed state
       */
      return {
        was,
        now
      }
    }

    /*
     *  Unchanged state
     */
    return state
  }

  render () {
    return this.props.children
  }
}

Zashiki.propTypes = {
  onMount: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}
