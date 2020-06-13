import classnames from 'classnames'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/title/stage'

export default class NoDecision extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'no-decision')
  }
}

NoDecision.propTypes = {
  ...Title.propTypes
}

NoDecision.defaultProps = {
  ...Title.defaultProps
}
