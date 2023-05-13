import classnames from 'classnames'

import Title from '#app/components/stages/debark/title/stage'

export default class Resolved extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'resolved')
  }
}

Resolved.propTypes = {
  ...Title.propTypes
}

Resolved.defaultProps = {
  ...Title.defaultProps
}
