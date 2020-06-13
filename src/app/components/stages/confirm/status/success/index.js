import classnames from 'classnames'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/stage'

export default class Success extends Stage {
  getClassName () {
    return classnames(super.getClassName(), 'success')
  }
}

Success.propTypes = {
  ...Stage.propTypes
}

Success.defaultProps = {
  ...Stage.defaultProps
}
