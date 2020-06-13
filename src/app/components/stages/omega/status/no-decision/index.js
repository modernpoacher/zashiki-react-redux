import classnames from 'classnames'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/stage'

export default class NoDecision extends Stage {
  getClassName () {
    return classnames(super.getClassName(), 'no-decision')
  }
}

NoDecision.propTypes = {
  ...Stage.propTypes
}

NoDecision.defaultProps = {
  ...Stage.defaultProps
}
