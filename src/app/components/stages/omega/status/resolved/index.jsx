import classnames from 'classnames'

import Stage from '#app/components/stages/omega/stage'

export default class Resolved extends Stage {
  getClassName () {
    return classnames(super.getClassName(), 'resolved')
  }
}

Resolved.propTypes = {
  ...Stage.propTypes
}

Resolved.defaultProps = {
  ...Stage.defaultProps
}