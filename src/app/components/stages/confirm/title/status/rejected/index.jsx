import classnames from 'classnames'

import Title from '#app/components/stages/confirm/title/stage'

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
