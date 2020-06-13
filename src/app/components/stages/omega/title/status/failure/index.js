import classnames from 'classnames'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/title/stage'

export default class Failure extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'failure')
  }
}

Failure.propTypes = {
  ...Title.propTypes
}

Failure.defaultProps = {
  ...Title.defaultProps
}
