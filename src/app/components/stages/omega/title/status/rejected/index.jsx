import classnames from 'classnames'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/title/stage'

export default class Rejected extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'rejected')
  }
}

Rejected.propTypes = {
  ...Title.propTypes
}

Rejected.defaultProps = {
  ...Title.defaultProps
}
