import classnames from 'classnames'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/title/stage'

export default class InProgress extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'in-progress')
  }
}

InProgress.propTypes = {
  ...Title.propTypes
}

InProgress.defaultProps = {
  ...Title.defaultProps
}
