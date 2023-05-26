import { Component } from 'react'
import PropTypes from 'prop-types'
import equal from 'fast-deep-equal'
import debug from 'debug'

const log = debug('zashiki-react-redux/app/components/zashiki/component')

log('`zashiki` is awake')

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
        } = {}
      } = {}
    } = props

    /*
     *  Create const 'now' from params 'alpha' and 'omega'
     */
    const now = resource(alpha, omega)

    /*
     *  Assign 'now' to state
     */
    this.state = {
      now
    }
  }

  /*
   *  Interrogate initial props for current Route 'params' (if the component has mounted then the route has changed)
   */
  componentDidMount () {
    log('componentDidMount')

    const {
      onMount = () => {},
      match: {
        params: {
          alpha,
          omega
        } = {}
      } = {}
    } = this.props

    const now = resource(alpha, omega)

    /*
     *  Dispatch
     */
    return onMount(now)
  }

  /**
   *  Interrogate latest props for changes to Route params (the route may have changed)
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Current state
   */
  static getDerivedStateFromProps (props, state) {
    log('getDerivedStateFromProps')

    const {
      match: {
        params: {
          alpha,
          omega
        }
      }
    } = props

    /*
     *  Create const 'now' from params 'alpha' and 'omega'
     */
    const now = resource(alpha, omega)

    /*
     *  Assign state 'now' to const 'was'
     */
    const {
      now: was
    } = state

    if (!equal(was, now)) {
      const {
        onMount
      } = props

      /*
       *  Dispatch
       */
      onMount(now)

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
  match: PropTypes.shape().isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}
