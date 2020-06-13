import classnames from 'classnames'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/stage'

export default class InProgress extends Stage {
  getClassName () {
    return classnames(super.getClassName(), 'in-progress')
  }
}

InProgress.propTypes = {
  ...Stage.propTypes
}

InProgress.defaultProps = {
  ...Stage.defaultProps
}
