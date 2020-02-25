import { Component } from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

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
   *  Interrogate initial props for current Route 'params' (if the component has mounted, the route has changed)
   */
  componentDidMount () { // console.log('(Zashiki)componentDidMount()')
    const {
      onChange,
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
    onChange(resource(alpha, omega))
  }

  /**
   *  Interrogate latest props for changes to Route params (the route may have changed, or other props)
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Current state
   */
  static getDerivedStateFromProps (props, state) { // console.log('[Zashiki]getDerivedStateFromProps()', props, state)
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
        onChange
      } = props

      /*
       *  Dispatch and notify the Node app
       */
      onChange(resource(alpha, omega))

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
  onChange: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}
