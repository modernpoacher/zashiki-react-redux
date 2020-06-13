import classnames from 'classnames'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/title/stage'

export default class Complete extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'complete')
  }
}

Complete.propTypes = {
  ...Title.propTypes
}

Complete.defaultProps = {
  ...Title.defaultProps
}
