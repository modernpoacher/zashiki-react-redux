import classnames from 'classnames'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/title/stage'

export default class Rejected extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'rejected')
  }
}
