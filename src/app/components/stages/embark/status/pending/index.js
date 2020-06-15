import React from 'react'
import classnames from 'classnames'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/stage'

export default class Pending extends Stage {
  getClassName () {
    return classnames(super.getClassName(), 'pending')
  }

  render () {
    return <div className={this.getClassName()} />
  }
}
