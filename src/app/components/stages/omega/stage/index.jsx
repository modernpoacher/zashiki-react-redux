import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Omega from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/omega'
import Gears from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/gears'

const log = debug('zashiki-react-redux/app/components/stages/omega/stage')

log('`zashiki` is awake')

export default class Stage extends Component {
  getClassName () {
    return 'omega'
  }

  render () {
    const {
      resource,
      definition,
      response,
      errors,
      onChange,
      onSubmit
    } = this.props

    return (
      <div className={this.getClassName()}>
        <Omega
          resource={resource}
          definition={definition}
          response={response}
          errors={errors}
          onChange={onChange}
          onSubmit={onSubmit}
        />

        <Gears />
      </div>
    )
  }
}

Stage.propTypes = {
  resource: PropTypes.shape({}),
  definition: PropTypes.shape({}),
  response: PropTypes.shape({}),
  errors: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
