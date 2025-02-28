import React from 'react'
import classnames from 'classnames'

import Title from '#zashiki-react-redux/app/components/stages/debark/title/stage'

export default class Pending extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'pending')
  }

  render () {
    return <header className={this.getClassName()} />
  }
}
