import classnames from 'classnames'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/stage'

export default class Complete extends Stage {
  getClassName () {
    return classnames(super.getClassName(), 'complete')
  }
}

Complete.propTypes = {
  ...Stage.propTypes
}

Complete.defaultProps = {
  ...Stage.defaultProps
}
