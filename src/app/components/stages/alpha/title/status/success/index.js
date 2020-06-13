import classnames from 'classnames'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/title/stage'

export default class Success extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'success')
  }
}

Success.propTypes = {
  ...Title.propTypes
}

Success.defaultProps = {
  ...Title.defaultProps
}
